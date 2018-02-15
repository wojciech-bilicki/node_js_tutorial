function first() {
  console.log('I will be called first');
}

function second() {
  console.log('I will be called second');
}

function third() {
  console.log('I will be called third');
}

first();
setTimeout(second, 0);

third();
