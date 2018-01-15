let somePromise = new Promise((resolve, reject) => {
  resolve('Hey, it worked!');
});

somePromise.then((message) => {
  console.log('Succes: ', message);
})
