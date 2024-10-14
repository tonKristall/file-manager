import { COLORS } from '../consts.js';

export const printRedText = (text) => {
  console.log(`${COLORS.RED}${text}${COLORS.RESET}`);
};

export const printGreenText = (text) => {
  console.log(`${COLORS.GREEN}${text}${COLORS.RESET}`);
};

export const printYellowText = (text) => {
  console.log(`${COLORS.YELLOW}${text}${COLORS.RESET}`);
};
