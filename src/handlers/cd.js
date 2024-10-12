import { ERRORS } from '../consts.js';
import { getDirPath } from '../utils/index.js';

export const cd = async (path) => {
  try {
    const dirPath = getDirPath(path);
    process.chdir(dirPath);
  } catch {
    throw new Error(ERRORS.OPERATION);
  }
};
