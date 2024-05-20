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
        try {
            const { args } = await this.parse(Deliverytime)
            if (args.shipmentData) {
                const shipmentDataFile = fs.readFileSync(args.shipmentData, 'utf8');
                const shipmentData = shipmentDataFile.split('\n');
                const shipmentCount = shipmentData.length - 3;
                const baseDeliveryRow = shipmentData[0].split(' ');
                if (baseDeliveryRow.length !== 2) {
                    this.error('Base delivery row is not in the correct format.');
                }

                if (shipmentCount !== Number.parseInt(baseDeliveryRow[1], 10)) {
                    this.error('Number of shipments do not match the number of shipments in the file.');
                }

                const packageInfos = shipmentData.slice(1, - 2);

                const weights = packageInfos.map(packageRow => {
                    const packageBits = packageRow.split(' ');
                    return Number.parseInt(packageBits[1], 10); // assuming the weight is the second element in each row
                });

                weights.sort((a, b) => a - b); // sort the weights in descending order

                let sum = 0;
                let i = 0;
                while (i < weights.length && sum + weights[i] < 200) {
                    sum += weights[i];
                    i++;
                }

                console.log('Sum of heaviest weights less than 200: ', sum);

                // const maxWeight = Math.max(...weights);

                // console.log('Largest weight: ', maxWeight);

                // const discountTable = await fetch('https://api.sheety.co/2b7bc60998aa8877d2553905c3b3ba85/everestEngineeringTestDeliveryDiscountTable/main')
                // const discountInfos = (await discountTable.json()).main;
            }
        } catch (error) {
            console.log(error);
        }
    }
}
