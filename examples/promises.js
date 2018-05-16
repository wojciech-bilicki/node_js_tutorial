var myShineyPromise = new Promise((resolve, reject) => {
  console.log('I am pending!');
  const greatError = true;
  // if(greatError) {
    reject("SO MANEY ERRRORERS")
    reject("SOM NANJHSDGJHASGDJK");
  // }
  resolve('I am resolved here!')
});

myShineyPromise.then(status => {
  console.log(status);
}).catch(err => {
  console.error(err);
})

