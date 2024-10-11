const listener = (chunk) => {
  const command = chunk.toString().trim();
  console.log(command);
};

process.stdin.on('data', listener);
