import { unlink } from 'fs/promises';
import { ERRORS } from '../consts.js';
import { getDirPath } from '../utils/index.js';

export const removeFile = async (path) => {
  if (!path) {
    throw new Error(ERRORS.INPUT);
  }
  try {
    const filePath = getDirPath(path);
    await unlink(filePath);
  } catch {
    throw new Error(ERRORS.OPERATION);
  }
};
