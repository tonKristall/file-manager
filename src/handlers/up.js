import { join, resolve } from 'path';

export const up = () => {
  const parentDir = join(resolve(), '..');
  process.chdir(parentDir);
};
