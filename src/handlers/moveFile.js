import { ERRORS } from '../consts.js';
import { copyFile } from './copyFile.js';
import { removeFile } from './removeFile.js';

export const moveFile = async (files) => {
  try {
    await copyFile(files);
    await removeFile(files[0]);
  } catch (error) {
    throw new Error(error.message || ERRORS.OPERATION);
  }
};
