import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
  const file = './files/fileToCalculateHashFor.txt';
  const digest = await new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(file);

    stream.on('data', (chunk) => {
      hash.update(chunk);
    });

    stream.on('end', () => {
      resolve(hash.digest('hex'));
    });

    stream.on('error', reject);

  });
  console.log(digest);
};

await calculateHash();
