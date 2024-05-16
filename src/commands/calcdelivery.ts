import {Args, Command} from '@oclif/core';
import * as fs from 'fs';

export default class Calcdelivery extends Command {
  static override args = {
      deliveryData: Args.file({
        description: 'Text file that contains the delivery data according to the example in --help.',
        required: true,
    }),
  }

  static override description = 'Calculate delivery rate.\n'
   +'Each package on its own row in a text file with the first line denoting the base delivery and number of packages.\n'+
   'base_delivery_cost no_of_packages\npackage_id weight_kg km_to_travel discount_code\n...'

  static override examples = [
    '<%= config.bin %> <%= command.id %> ./path/to/textfile.txt',
  ]

  public async run(): Promise<void> {
    const {args} = await this.parse(Calcdelivery)
    if (args.deliveryData) {
        const deliveryDataFile = fs.readFileSync(args.deliveryData, 'utf8');
        const dataLines = deliveryDataFile.split('\n');
    }
  }
}
