import { USERNAME_ARG, USERNAME_LESS } from '../consts.js';

export const getUserName = () => {
  return process.argv.find((arg) => arg.startsWith(USERNAME_ARG))?.replace(USERNAME_ARG, '') || USERNAME_LESS;
};
