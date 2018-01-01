console.log('starting app');

const seconds = 2000;
setTimeout(() =>{
  console.log('inside of callback with 2 seconds');
}, seconds); // wait and callback in 2 seconds

const zeroSeconds = 0;
setTimeout(() => {
  console.log('Seconds setTimeout');
}, zeroSeconds);

console.log('finishing up');
