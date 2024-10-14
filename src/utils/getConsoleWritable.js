import { Writable } from 'stream';
import { printGreenText } from './colorText.js';

export const getConsoleWritable = () => new Writable({
  decodeStrings: false,
  write(chunk, _, callback) {
    printGreenText(chunk);
    callback();
  },
});
