const yargs = require('yargs');
const create = require('./create')

yargs
  .command(
    ['create', 'c'],
    'create docs site',
    {},
    async (argv) => {
      try {
        await create(argv)
      } catch (error) {
        throw console.error(error.message);
      }
    }
  )
  .option('theme', {
    alias: 't',
    type: 'string',
    desc: 'theme hex color',
    default: '32b824',
  })
  .option('path', {
    alias: 'p',
    type: 'string',
    desc: 'path to README file',
    default: `${process.env.INIT_CWD || process.cwd()}/README.md`,
  })
  .demandCommand(1, 'no arguments provided, run with --help')
  .help()
  .wrap(yargs.terminalWidth()).argv;
