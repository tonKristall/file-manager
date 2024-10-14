import { join, resolve } from 'path';
import { ERRORS } from '../consts.js';

export const up = async () => {
  try {
    const parentDir = join(resolve(), '..');
    process.chdir(parentDir);
  } catch {
    throw new Error(ERRORS.OPERATION);
  }
};
