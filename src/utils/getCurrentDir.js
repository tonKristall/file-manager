import { resolve } from 'path';

export const getCurrentDir = () => {
  return `You are currently in ${resolve()}`;
};
