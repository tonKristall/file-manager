import { rename } from 'fs/promises';
import { ERRORS } from '../consts.js';
import { getDirPath, splitPath } from '../utils/index.js';

export const renameFile = async (path) => {
  const files = splitPath(path);
  if (!files || !files[0] || !files[1]) {
    throw new Error(ERRORS.INPUT);
  }

  try {
    const oldPath = getDirPath(files[0]);
    const newPath = getDirPath(files[1]);
    await rename(oldPath, newPath);
  } catch {
    throw new Error(ERRORS.OPERATION);
  }
};
