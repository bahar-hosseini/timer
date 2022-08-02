let args = process.argv.slice(2);

const timer = function(inputs) {
  if (inputs === undefined) {
    console.log('Error : You must enter numbers');
  }
  inputs.sort();
  let time = 0;
  for (let t of inputs) {
    t = t * 1000;
    setTimeout(()=>{
      typeof t === 'number' && t > 0 ? process.stdout.write('\x07') : null;
    },time += t);
  }
};


timer(args);