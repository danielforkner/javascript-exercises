const fibonacci = function(n) {
    if (n < 1) {
        return 'OOPS';
    }
    let [counter, p1, temp] = [1, 0, 0];
    let curr = 1;
    while (counter < parseInt(n)) {
        temp = curr;
        curr += p1;
        p1 = temp;
        counter++;
    }
    return curr;
};

console.log(fibonacci(4));

// brute force: start counting through the series. increment until counter equals N and return. 
// to count, update two temporary variables

// Do not edit below this line
module.exports = fibonacci;
