import { ERRORS } from '../consts.js';
import { createReadStream, createWriteStream } from 'fs';
import { getDirPath } from '../utils/index.js';
import { pipeline } from 'stream/promises';
import { access } from 'fs/promises';
import { join, parse } from 'path';
import { createBrotliCompress } from 'zlib';

export const compress = async (files) => {
  if (!files || !files[0]) {
    throw new Error(ERRORS.INPUT);
  }

  try {
    const sourcePath = getDirPath(files[0]);
    await access(sourcePath);
    const { base, dir } = parse(sourcePath);
    const fileName = `${base}.br`;
    const destinationPath = files[1] ? join(getDirPath(files[1]), fileName) : join(dir, fileName);
    const sourceStream = createReadStream(sourcePath);
    const destinationStream = createWriteStream(destinationPath);
    const brotliCompress = createBrotliCompress();

    await pipeline(
      sourceStream,
      brotliCompress,
      destinationStream,
    );
  } catch {
    throw new Error(ERRORS.OPERATION);
  }
};
