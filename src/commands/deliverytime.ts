import { Args, Command, Flags } from '@oclif/core';
import * as fs from 'node:fs';

export default class Deliverytime extends Command {
    static override args = {
        shipmentData: Args.string({ description: 'Text file that contains the delivery data according to the example in --help.', required: true }),
    }

    static override description = 'Estimates the delivery time based on file input. Each row in the file denotes 1 package.'

    static override examples = [
        '<%= config.bin %> <%= command.id %> ./path/to/textfile.txt',
    ]

    public async run(): Promise<void> {
        const { args } = await this.parse(Deliverytime);
        if (!args.shipmentData) {
            this.error('Input file path must be provided.');
            return;
        }

        const inputData = fs.readFileSync(args.shipmentData, 'utf8');
        const lines = inputData.split('\n').filter(line => line.trim() !== '');

        const baseDeliveryCost = Number.parseInt(lines[0].split(' ')[0], 10);
        const numberOfPackages = Number.parseInt(lines[0].split(' ')[1], 10);
        const packages = lines.slice(1, numberOfPackages + 1).map(line => {
            const [pkgId, pkgWeight, distance, offerCode] = line.split(' ');
            return {
                distance: Number.parseFloat(distance),
                offerCode,
                pkgId,
                pkgWeight: Number.parseFloat(pkgWeight)
            };
        });

        const vehicleDetails = lines[numberOfPackages + 1].split(' ');
        const numberOfVehicles = Number.parseInt(vehicleDetails[0], 10);
        const maxSpeed = Number.parseInt(vehicleDetails[1], 10);
        const maxWeight = Number.parseFloat(vehicleDetails[2]);

        const offers = {
            'OFR001': { discount: 0.1, distanceRange: [0, 200], weightRange: [70, 200] },
            'OFR002': { discount: 0.07, distanceRange: [50, 150], weightRange: [100, 250] },
            'OFR003': { discount: 0.05, distanceRange: [50, 250], weightRange: [10, 150] }
        };

        const offer = offers[pkg.offerCode];

        // Process packages
        const result = packages.map(pkg => {
            const deliveryCost = baseDeliveryCost + (pkg.pkgWeight * 10) + (pkg.distance * 5);
            let discount = 0;
            if (offer &&
                pkg.pkgWeight >= offer.weightRange[0] &&
                pkg.pkgWeight <= offer.weightRange[1] &&
                pkg.distance >= offer.distanceRange[0] &&
                pkg.distance <= offer.distanceRange[1]) {
                discount = deliveryCost * offer.discount;
            }

            const totalCost = deliveryCost - discount;
            return { ...pkg, discount, estimatedDeliveryTime: 0, totalCost };
        });

        // Estimate delivery time
        let currentTime = 0;
        const vehicleAvailableTime = new Array(numberOfVehicles).fill(0);

        while (packages.length > 0) {
            packages.sort((a, b) => b.pkgWeight - a.pkgWeight || a.distance - b.distance);

            for (let i = 0; i < numberOfVehicles && packages.length > 0; i++) {
                if (vehicleAvailableTime[i] <= currentTime) {
                    let totalWeight = 0;
                    let tripDistance = 0;
                    const tripPackages = [];

                    while (packages.length > 0 && totalWeight + packages[0].pkgWeight <= maxWeight) {
                        const pkg = packages.shift();
                        totalWeight += pkg.pkgWeight;
                        tripDistance = Math.max(tripDistance, pkg.distance);
                        tripPackages.push(pkg);
                    }

                    const tripTime = 2 * (tripDistance / maxSpeed);
                    for (const pkg of tripPackages) {
                        pkg.estimatedDeliveryTime = currentTime + tripTime / 2;
                    }

                    vehicleAvailableTime[i] = currentTime + tripTime;
                }
            }

            currentTime = Math.min(...vehicleAvailableTime);
        }

        // Output results
        for (const pkg of result) {
            console.log(`${pkg.pkgId} ${pkg.discount.toFixed(2)} ${pkg.totalCost.toFixed(2)} ${pkg.estimatedDeliveryTime.toFixed(2)}`);
        }
    }

}
