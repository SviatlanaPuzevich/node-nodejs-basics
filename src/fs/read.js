import fs from 'fs';

const read = async () => {
  const fileToRead = './files/fileToRead.txt';
  if (!fs.existsSync(fileToRead)) {
    throw new Error ('FS operation failed');
  }
  fs.readFile(fileToRead, 'utf8', (err, data) => {
    if (err) {
      console.error (err);
    }
    console.log(data);
  })
};

await read();
