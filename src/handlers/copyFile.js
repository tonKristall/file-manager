import { createReadStream, createWriteStream } from 'fs';
import { basename, join } from 'path';
import { pipeline } from 'stream/promises';
import { ERRORS } from '../consts.js';
import { getDirPath, splitPath } from '../utils/index.js';

export const copyFile = async (path) => {
  const files = splitPath(path);
  if (!files || !files[0] || !files[1]) {
    throw new Error(ERRORS.INPUT);
  }

  try {
    const sourcePath = getDirPath(files[0]);
    const fileName = basename(sourcePath);
    const destinationPath = join(getDirPath(files[1]), fileName);
    const readStream = createReadStream(sourcePath);
    const writeStream = createWriteStream(destinationPath);
    await pipeline(readStream, writeStream);
  } catch {
    throw new Error(ERRORS.OPERATION);
  }
};
