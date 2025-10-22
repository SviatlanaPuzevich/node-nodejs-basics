import fs from 'fs';

const list = async () => {
  const dir = './files';
  if (!fs.existsSync(dir)) {
    throw new Error('FS operation failed');
  }
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(err)
    }
    files.forEach(file => {
      console.log(file);
    });
  });
};

await list();
