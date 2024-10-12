export const splitPath = (args) => {
  return args.match(/(.+\.\S+)\s(.+)/)?.slice(1);
};
