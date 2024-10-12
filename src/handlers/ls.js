import { readdir } from 'fs/promises';
import { ERRORS } from '../consts.js';
import { sortFiles } from '../utils/index.js';
import { getDirPath } from '../utils/index.js';

export const ls = async (path) => {
  try {
    const dirPath = getDirPath(path);
    const filesList = await readdir(dirPath, { withFileTypes: true });
    const soredFiles = sortFiles(filesList);
    const filesDetails = soredFiles.map((file) => ({
        Name: file.name,
        Type: file.isFile() ? 'file' : 'directory',
      }),
    );
    console.table(filesDetails);
  } catch {
    throw new Error(ERRORS.OPERATION);
  }
};
