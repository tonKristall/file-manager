import { EOL, homedir, cpus, userInfo, arch } from 'os';
import { ERRORS, OPERATIONS } from '../consts.js';
import { printGreenText } from '../utils/colorText.js';

export const operatingSystem = async (operation) => {
  if (!operation) {
    throw new Error(ERRORS.INPUT);
  }
  try {
    switch (operation) {
      case OPERATIONS.EOL:
        printGreenText(JSON.stringify(EOL));
        break;
      case OPERATIONS.CPUS:
        const cpusInfo = cpus().map(({ model, speed }) => ({
          model: model.trim(),
          speed: `${speed / 1000} GHz`,
        }));
        printGreenText(`Overall amount of CPUS: ${cpusInfo.length}`);
        console.table(cpusInfo);
        break;
      case OPERATIONS.ARCHITECTURE:
        printGreenText(arch());
        break;
      case OPERATIONS.HOME_DIR:
        printGreenText(homedir());
        break;
      case OPERATIONS.USER_NAME:
        printGreenText(userInfo().username);
        break;
      default:
        throw new Error(ERRORS.OPERATION);
    }
  } catch {
    throw new Error(ERRORS.OPERATION);
  }
};
