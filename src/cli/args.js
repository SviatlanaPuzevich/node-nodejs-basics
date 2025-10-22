const parseArgs = () => {
  const args = process.argv.slice(2).reduce((acc, cur, currentIndex) => {
    if (currentIndex % 2 === 0) {
      acc = acc + cur.slice(2) + ' is ';
    } else {
      acc = acc + cur + ', ';
    }
    return acc;
  }, '');
  console.log(args.slice(0, args.length - 2));
};

parseArgs();
