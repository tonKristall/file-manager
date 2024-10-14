import { homedir } from 'os';
import { createInterface } from 'readline';
import { getCurrentDir } from './utils/index.js';
import { getUserName } from './utils/index.js';
import { printGreenText, printYellowText } from './utils/colorText.js';
import { listener } from './listener.js';

const userName = getUserName();
const goodByeMessage = `Thank you for using File Manager, ${userName}, goodbye!`;
process.chdir(homedir());
printGreenText(`Welcome to the File Manager, ${userName}!`);
printYellowText(getCurrentDir());

const int = createInterface({
  input: process.stdin,
  output: process.stdout,
});
int
  .on('line', listener)
  .on('close', () => {
    printGreenText(goodByeMessage);
    process.exit();
  });

process
  .on('SIGINT', () => int.close())
  .on('close', () => int.close());
