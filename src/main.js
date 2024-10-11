import { COLORS, COMMANDS, ERRORS } from './consts.js';
import { up, cd } from './handlers/index.js';
import { getCurrentDir } from './utils/index.js';
import {
  printGreenText,
  printRedText,
  printYellowText,
} from './utils/colorText.js';

const listener = async (chunk) => {
  try {
    const [command, ...args] = chunk.toString().trim().split(' ');

    switch (command) {
      case COMMANDS.CLOSE:
        process.exit(0);
        break;
      case COMMANDS.UP:
        await up();
        break;
      case COMMANDS.CD:
        const path = args.join(' ');
        await cd(path);
        break;
      default:
        throw new Error(ERRORS.INPUT);
    }
  } catch (error) {
    printRedText(error.message);
  } finally {
    printYellowText(getCurrentDir());
  }
};

printYellowText(getCurrentDir());
process.stdin.on('data', listener);



