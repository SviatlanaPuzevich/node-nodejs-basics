import zlib from 'zlib';
import fs from 'fs';

const decompress = async () => {
  const gunzip = zlib.createGunzip();
  const readStream = fs.createReadStream('archive.gz');
  const writeStream = fs.createWriteStream('fileToCompress.txt');
  readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
