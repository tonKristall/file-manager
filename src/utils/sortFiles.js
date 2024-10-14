export const sortFiles = (files) => {
  return [...files].sort((a, b) => {
    const isFileA = a.isFile();
    const isFileB = b.isFile();
    if (isFileA === isFileB) {
      return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
    }
    return isFileA ? 1 : -1;
  });
};
