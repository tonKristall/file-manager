import { COMMANDS, ERRORS } from './consts.js';
import { up, cd, ls, cat, add, rn } from './handlers/index.js';
import { getCurrentDir } from './utils/index.js';
import { printRedText, printYellowText } from './utils/colorText.js';

export const listener = async (chunk) => {
  try {
    const [command, ...args] = chunk.toString().trim().split(' ');
    const path = args.join(' ');

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
        await cd(path);
        break;
      }
      case COMMANDS.LS: {
        await ls(path);
        break;
      }
      case COMMANDS.CAT: {
        await cat(path);
        break;
      }
      case COMMANDS.ADD: {
        await add(path);
        break;
      }
      case COMMANDS.RN: {
        await rn(path);
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
