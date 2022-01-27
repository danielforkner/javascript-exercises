const removeFromArray = function(array, ...args) {
    for (num of args) {
        let index = array.indexOf(num);
        if (index !== -1) {
            array.splice(index, 1);
        }
    };
    return array;
};

removeFromArray([1, 2, 3], 1, 2, 3)

// Do not edit below this line
module.exports = removeFromArray;