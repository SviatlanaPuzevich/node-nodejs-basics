import fs from 'fs';

const rename = async () => {
  const initFile = './files/wrongFilename.txt';
  const finalFile = './files/properFilename.md';
  if (!fs.existsSync(initFile) || fs.existsSync(finalFile) ) {
    throw new Error('FS operation failed');
  }
  fs.renameSync(initFile, finalFile);
};

await rename();
