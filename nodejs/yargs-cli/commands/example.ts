import { CommandModule, Argv, Options, ArgumentsCamelCase } from 'yargs';

export interface MyOptions extends Options {
  query: string;
}

export class MyCommand<U extends MyOptions> implements CommandModule<{}, U> {
  public command = 'example [query]';
  public describe = 'example';

  public builder = (args: Argv): Argv<U> => {
    args.positional('query', {
      describe: 'query',
    });
    return args as unknown as Argv<U>;
  };

  public handler = async (args: ArgumentsCamelCase<U>) => {
    console.log(`MyCommand called with ${args}`);
  };
}
