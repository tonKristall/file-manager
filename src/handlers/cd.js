import { join, resolve } from 'path';
import fs from 'fs';
import { ERRORS } from '../consts.js';

export const cd = async (path) => {
  try {
    const isAbsolute = path.includes(':');
    const dir = isAbsolute ? path : join(resolve(), path);
    process.chdir(dir);
  } catch {
    throw new Error(ERRORS.OPERATION);
  }
};
