import { homedir } from 'os';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import { dirname, join } from 'path';
import { getCurrentDir, getUserName } from './utils/index.js';
import { printGreenText, printYellowText } from './utils/colorText.js';

const userName = getUserName();
const goodByeMessage = `Thank you for using File Manager, ${userName}, goodbye!`;
process.chdir(homedir());
printGreenText(`Welcome to the File Manager, ${userName}!`);

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'main.js');
const child = spawn('node', [filePath]);

process.stdin.pipe(child.stdin);
child.stdout.pipe(process.stdout);

process.on('SIGINT', () => {
});
child.on('close', (code) => {
  printGreenText(goodByeMessage);
});
