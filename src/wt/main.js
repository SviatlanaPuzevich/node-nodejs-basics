import os from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
  const cpus = os.cpus().length;
  console.log(`Processing ${cpus} cpus`);
  let fib = 10;
  const workers = [];
  for (let i = 0; i < cpus; i++) {
    workers.push(new Promise((resolve, reject) => {
      const worker = new Worker('./worker.js', { workerData: fib });
      worker.on('message', (data) => {
        resolve({ status: 'resolved', data })
      });
      worker.on('error', () => resolve({ status: 'error', data: null }));
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    }));
    fib++;
  }
  Promise.all(workers).then((result) => {
    console.log(result);
  })
};

await performCalculations();
