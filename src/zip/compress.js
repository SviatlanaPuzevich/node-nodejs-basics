import zlib from 'zlib';
import fs from 'fs';
import stream from 'stream';

const compress = async () => {
  const gzip =  zlib.createGzip();
  const readStream = fs.createReadStream('./files/fileToCompress.txt');
  const writeStream = fs.createWriteStream('archive.gz');
  await stream.pipeline(readStream, gzip, writeStream, (error)=>{
    if(error) console.error(error);
  });
};

await compress();
