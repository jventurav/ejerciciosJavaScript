const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let sumNumbers = 0;
    for (let i = 0; i < param.length; i++) {
        sumNumbers += param[i];
    }
    return console.log(sumNumbers / param.length);
}

average(numbers);