import { homedir } from 'os';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import { dirname, join } from 'path';
import { getCurrentDir, getUserName } from './utils/index.js';

const userName = getUserName();
process.chdir(homedir());
console.log(`Welcome to the File Manager, ${userName}!`);
console.log(getCurrentDir());

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'main.js');
const child = spawn('node', [filePath]);

process.stdin.pipe(child.stdin);
child.stdout.pipe(process.stdout);
