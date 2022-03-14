const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let sumNumbers = 0;
  for (let i = 0; i < param.length; i++) {
    sumNumbers += param[i];
  }
  return console.log(sumNumbers);
}

sumAll(numbers);