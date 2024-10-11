import { COMMANDS, ERRORS } from './consts.js';
import { up } from './handlers/index.js';
import { getCurrentDir } from './utils/index.js';

const listener = (chunk) => {
  try {
    const [command, ...args] = chunk.toString().trim().split(' ');

    switch (command) {
      case COMMANDS.CLOSE:
        process.exit(0);
        break;
      case COMMANDS.UP:
        up();
        break;
      default:
        throw new Error(ERRORS.INPUT);
    }
    console.log(getCurrentDir());
  } catch (error) {
    console.log(error.message || ERRORS.OPERATION);
  }
};

console.log(getCurrentDir());
process.stdin.on('data', listener);
