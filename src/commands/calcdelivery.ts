/* eslint-disable max-depth */
import { Args, Command } from '@oclif/core';
import * as fs from 'node:fs';

export default class Calcdelivery extends Command {
    static override args = {
        deliveryData: Args.file({
            description: 'Text file that contains the delivery data according to the example in --help.',
            required: true,
        }),
    }

    static override description = 'Calculate delivery rate.\n'
        + 'Each package on its own row in a text file with the first line denoting the base delivery and number of packages.\n' +
        'base_delivery_cost no_of_packages\npackage_id weight_kg km_to_travel discount_code\n...'

    static override examples = [
        '<%= config.bin %> <%= command.id %> ./path/to/textfile.txt',
    ]

    public async run(): Promise<void> {
        try {
            const { args } = await this.parse(Calcdelivery)
            if (args.deliveryData) {
                const deliveryDataFile = fs.readFileSync(args.deliveryData, 'utf8');
                const dataLines = deliveryDataFile.split('\n');
                const packageCount = dataLines.length - 2;
                const baseDeliveryRow = dataLines[0].split(' ');
                if (baseDeliveryRow.length !== 2) {
                    this.error('Base delivery row is not in the correct format.');
                }

                if (packageCount !== Number.parseInt(baseDeliveryRow[1], 10)) {
                    this.error('Number of packages do not match the number of packages in the file.');
                }

                const packageInfos = dataLines.slice(1, - 1);
                const discountTable = await fetch('https://api.sheety.co/2b7bc60998aa8877d2553905c3b3ba85/everestEngineeringTestDeliveryDiscountTable/main')
                const discountInfos = (await discountTable.json()).main;
                let discount = 0;
                for (const packageRow of packageInfos) {
                    const packageBits = packageRow.split(' ');
                    const deliveryCost = Number.parseInt(baseDeliveryRow[0], 10) + (Number.parseInt(packageBits[1], 10) * 10) + (Number.parseInt(packageBits[2], 10) * 5);
                    if (packageBits.length < 4) {
                        discount = 0;
                    } else {
                        const discountCode = packageBits[3];
                        const discountCell = discountInfos.find((discountInfo: any) => discountInfo.code === discountCode);
                        const weight = Number.parseInt(packageBits[1], 10);
                        const distance = Number.parseInt(packageBits[2], 10);
                        discount = (weight >= Number.parseInt(discountCell.minWeightKg, 10) && weight <= Number.parseInt(discountCell.maxWeightKg, 10) && distance >= Number.parseInt(discountCell.minDistanceKm, 10) && distance <= Number.parseInt(discountCell.maxDistanceKm, 10)) ? discountCell.discount : 0;
                    }
                    
                    const discountDeliveryCost = deliveryCost - (deliveryCost * discount/100);

                    console.log(packageBits[0] + ' ' + discount + ' ' + discountDeliveryCost);
                }
            }
        } catch (error) {
            console.error(error);
        }
    }
}
