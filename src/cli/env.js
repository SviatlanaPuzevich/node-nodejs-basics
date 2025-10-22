const parseEnv = () => {
  const PREFIX = 'RSS_';
  const envVariables = Object.entries(process.env)
    .filter(([key]) => key.startsWith(PREFIX))
    .map(([key,val]) => key + '=' + val)
    .join('; ');
  console.log(envVariables);
};

parseEnv();
