import fs from 'fs';

const write = async () => {
  const file = './files/fileToWrite.txt';
  return new Promise((resolve, reject) => {
    const writeStream = fs.createWriteStream(file);
    const readStream = process.stdin;
    readStream.pipe(writeStream);
    writeStream.on('finish', resolve);
    writeStream.on('error', reject);
    readStream.on('error', reject);
  });
};

await write();
