import fs from 'fs';

const create = async () => {
  const fileName = 'fresh.txt';
  if (fs.existsSync(fileName)) {
    throw new Error('FS operation failed');
  }
  fs.writeFile(fileName, 'I am fresh and young', 'utf8', (error) => {
    if (error) {
      console.error(error);
    }
  })
};

await create();
