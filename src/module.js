console.log('module js');

async function start() {
  return await Promise.resolve('async working :)');
}

// var a = 1;

start().then(console.log);
