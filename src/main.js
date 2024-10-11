import { COMMANDS, ERRORS } from './consts.js';

const listener = (chunk) => {
  const [command, ...args] = chunk.toString().trim().split(' ');
  switch (command[0]) {
    case COMMANDS.CLOSE:
      process.exit(0);
      break;
    default:
      console.log(ERRORS.COMMAND);
  }
};

process.stdin.on('data', listener);
