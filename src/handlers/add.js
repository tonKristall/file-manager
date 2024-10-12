import { open } from 'fs/promises';
import { ERRORS } from '../consts.js';
import { getDirPath } from '../utils/index.js';

export const add = async (path) => {
  if (!path) {
    throw new Error(ERRORS.INPUT);
  }
  let fileHandle;
  try {
    const filePath = getDirPath(path);
    fileHandle = await open(filePath, 'wx');
  } catch {
    throw new Error(ERRORS.OPERATION);
  } finally {
    fileHandle?.close();
  }
};
