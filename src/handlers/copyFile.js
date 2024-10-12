import { createReadStream, createWriteStream } from 'fs';
import { access } from 'fs/promises';
import { basename, join } from 'path';
import { pipeline } from 'stream/promises';
import { ERRORS } from '../consts.js';
import { getDirPath } from '../utils/index.js';

export const copyFile = async (files) => {
  if (!files || !files[0] || !files[1]) {
    throw new Error(ERRORS.INPUT);
  }

  try {
    const sourcePath = getDirPath(files[0]);
    await access(sourcePath);
    const fileName = basename(sourcePath);
    const destinationPath = join(getDirPath(files[1]), fileName);
    const sourceStream = createReadStream(sourcePath);
    const destinationStream = createWriteStream(destinationPath);
    await pipeline(sourceStream, destinationStream);
  } catch {
    throw new Error(ERRORS.OPERATION);
  }
};
