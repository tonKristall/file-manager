import { ERRORS } from '../consts.js';
import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { getDirPath } from '../utils/index.js';
import { pipeline } from 'stream/promises';
import { getConsoleWritable } from '../utils/getConsoleWritable.js';

export const hashCalculation = async (path) => {
  if (!path) {
    throw new Error(ERRORS.INPUT);
  }
  try {
    const filePath = getDirPath(path);
    const source = createReadStream(filePath);
    const destination = getConsoleWritable();
    const hash = createHash('sha256');
    await pipeline(source, hash.setEncoding('hex'), destination);
  } catch {
    throw new Error(ERRORS.OPERATION);
  }
};
