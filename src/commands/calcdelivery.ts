import { Args, Command } from '@oclif/core';
import Airtable from 'airtable';
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
            const airtableConnect = new Airtable({ apiKey: 'patkn3Vg0tNoU58LO.b1c055bfe179e029cdad428ace62fb48299fc8ab7a8542cb5f00eda37b338ffc' }).base('appfpuP60LaQJ6sZf');
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
                airtableConnect('tblmTqV8q0naGlpFo').select(
                    {
                        view: 'Grid view',
                    }
                ).firstPage((err, records) => {
                    if (err) {
                        console.error(err);
                        return;
                    }

                    for (const record of records) {
                        console.log('Retrieved', record.get(['Discount Code', 'Discount', 'Min Distance', 'Max Distance', 'Min Weight', 'Max Weight']));
                    }
                }
                );
                for (const packageRow of packageInfos) {
                    const packageBits = packageRow.split(' ');
                    if (packageBits.length < 4) {
                        const discount = 0;
                    } else {
                        const discountCode = packageBits[3];
                    }
                }
            }
        } catch (error) {
            console.error(error);
        }
    }
}
