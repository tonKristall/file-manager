import { COMMANDS, ERRORS } from './consts.js';
import { up, cd, ls, cat } from './handlers/index.js';
import { getCurrentDir } from './utils/index.js';
import { printRedText, printYellowText } from './utils/colorText.js';

export const listener = async (chunk) => {
  try {
    const [command, ...args] = chunk.toString().trim().split(' ');

    switch (command) {
      case COMMANDS.CLOSE: {
        process.emit('close');
        break;
      }
      case COMMANDS.UP: {
        await up();
        break;
      }
      case COMMANDS.CD: {
        const path = args.join(' ');
        await cd(path);
        break;
      }
      case COMMANDS.LS: {
        const path = args.join(' ');
        await ls(path);
        break;
      }
      case COMMANDS.CAT: {
        const path = args.join(' ');
        await cat(path);
        break;
      }
      default: {
        throw new Error(ERRORS.INPUT);
      }
    }
  } catch (error) {
    printRedText(error.message);
  } finally {
    printYellowText(getCurrentDir());
  }
};
