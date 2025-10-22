import fs from 'fs';

const copy = async () => {
  const source = 'files';
  const target = 'files_copy';
  if (!fs.existsSync(source) || fs.existsSync(target)) {
    throw new Error('FS operation failed');
  }
  fs.cp(source, target, {recursive: true}, (error) => {
    if (error) console.error(error);
  })
};

await copy();
