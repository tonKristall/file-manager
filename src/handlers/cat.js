import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { ERRORS } from '../consts.js';
import { getDirPath } from '../utils/index.js';
import { getConsoleWritable } from '../utils/getConsoleWritable.js';

export const cat = async (path) => {
  if (!path) {
    throw new Error(ERRORS.INPUT);
  }
  try {
    const filePath = getDirPath(path);
    const readStream = createReadStream(filePath, { encoding: 'utf8' });
    const writeStream = getConsoleWritable();
    await pipeline(readStream, writeStream);
  } catch {
    throw new Error(ERRORS.OPERATION);
  }
};
