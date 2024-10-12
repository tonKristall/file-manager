import { join, resolve } from 'path';

export const getDirPath = (path) => {
  const isAbsolute = path.includes(':');
  return isAbsolute ? join(path, '.') : join(resolve(), path);
};
