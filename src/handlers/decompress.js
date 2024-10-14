import { ERRORS } from '../consts.js';
import { createReadStream, createWriteStream } from 'fs';
import { getDirPath } from '../utils/index.js';
import { pipeline } from 'stream/promises';
import { access } from 'fs/promises';
import { join, parse } from 'path';
import { createBrotliDecompress } from 'zlib';

export const decompress = async (files) => {
  if (!files || !files[0]) {
    throw new Error(ERRORS.INPUT);
  }

  try {
    const sourcePath = getDirPath(files[0]);
    await access(sourcePath);
    const { name, dir, ext } = parse(sourcePath);
    const destinationPath = files[1] ? join(getDirPath(files[1]), name) : join(dir, name);
    const sourceStream = createReadStream(sourcePath);
    const destinationStream = createWriteStream(destinationPath);
    const brotliDecompress = createBrotliDecompress();

    await pipeline(
      sourceStream,
      brotliDecompress,
      destinationStream,
    );
  } catch {
    throw new Error(ERRORS.OPERATION);
  }
};
