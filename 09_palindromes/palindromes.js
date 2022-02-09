const palindromes = function (str) {
    let strArr = str.toUpperCase().split('');
    let left = 0;
    let right = strArr.length - 1;
    while (left < right) {
        // ignore anything not a char
        if (strArr[left].charCodeAt(0) < 65 || strArr[left].charCodeAt(0) > 90) {
            left++;
        } else if (strArr[right].charCodeAt(0) < 65 || strArr[right].charCodeAt(0) > 90) {
            right--;
        } else if (strArr[left] === strArr[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};

console.log(palindromes('rac!ecaR!'));

// Do not edit below this line
module.exports = palindromes;
