import { COMMANDS, ERRORS } from './consts.js';
import {
  up,
  changeDirectory,
  filesList,
  readFile,
  createFile,
  renameFile,
  copyFile,
  moveFile,
  removeFile,
} from './handlers/index.js';
import { getCurrentDir, splitPath } from './utils/index.js';
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
      case COMMANDS.CHANGE_DIRECTORY: {
        await changeDirectory(path);
        break;
      }
      case COMMANDS.LIST: {
        await filesList(path);
        break;
      }
      case COMMANDS.READ: {
        await readFile(path);
        break;
      }
      case COMMANDS.CREATE: {
        await createFile(path);
        break;
      }
      case COMMANDS.RENAME: {
        await renameFile(path);
        break;
      }
      case COMMANDS.COPY: {
        const files = splitPath(path);
        await copyFile(files);
        break;
      }
      case COMMANDS.MOVE: {
        const files = splitPath(path);
        await moveFile(files);
        break;
      }
      case COMMANDS.REMOVE: {
        await removeFile(path);
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
