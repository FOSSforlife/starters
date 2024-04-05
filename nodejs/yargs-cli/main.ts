// Usage: tsx main.ts [command] [args]
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { MyCommand } from './commands/example';

const yargsParser = yargs(hideBin(process.argv));

for (const command of [new MyCommand()]) {
  yargsParser.command(command);
}

yargsParser.parse();
