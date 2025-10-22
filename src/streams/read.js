import fs from 'fs';

const read = async () => {
  return  new Promise((resolve, reject) => {
    const file = './files/fileToRead.txt';
    const stream = fs.createReadStream(file);
    stream.on('data', (chunk) => {
      process.stdout.write(chunk.toString());
    });
    stream.on('end', resolve);
    stream.on('error', reject);
  });
};

await read();
