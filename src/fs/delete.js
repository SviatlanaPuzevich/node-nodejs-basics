import fs from 'fs';

const remove = async () => {
  const fileToRemove = './files/fileToRemove.txt';
  if (!fs.existsSync(fileToRemove)) {
    throw new Error('FS operation failed');
  }
  fs.unlinkSync(fileToRemove);
};

await remove();
