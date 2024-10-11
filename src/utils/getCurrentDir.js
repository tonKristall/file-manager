import { resolve } from 'path';
import { EOL } from 'os';

export const getCurrentDir = () => {
  return EOL + `You are currently in ${resolve()}`;
};
