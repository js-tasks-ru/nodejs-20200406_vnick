function sum(a, b) {
  /* ваш код */
  var result = a + b;
  if(typeof result === 'number'){
    return result;
  }else{
    throw new TypeError('Какой-то из аргументов не авляется числом');
  }
}

module.exports = sum;
