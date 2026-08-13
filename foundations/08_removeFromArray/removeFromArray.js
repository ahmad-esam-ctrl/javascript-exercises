const removeFromArray = function (theArray, ...values) {
    let result = theArray.filter(value => !values.includes(value));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
