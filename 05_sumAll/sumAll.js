const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {return 'ERROR'};
    if (typeof num1 != 'number' || typeof num2 != 'number') {return 'ERROR'};
    
    let sum = num2 > num1 ? num1 : num2;
    let low = num2 > num1 ? num1 : num2;
    let high = num2 > num1 ? num2 : num1;
    while (low < high) {
        low++;
        sum += low;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
