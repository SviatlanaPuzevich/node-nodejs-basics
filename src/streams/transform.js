import { Transform } from 'stream';

const reverseStream = new Transform({
  transform(chunk, encoding, callback) {
    const reverse = chunk.toString()
      .split('')
      .reverse()
      .join('');
    callback(null, reverse);
  }
});
const transform = async () => {
  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
