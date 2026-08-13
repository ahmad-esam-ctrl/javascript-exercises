const sumAll = function (num1, num2) {
    let numbers = [];
    let total = 0;
    if (Number.isInteger(num1) == false || Number.isInteger(num2) == false || num1 < 0 || num2 < 0) {
        return "ERROR";
    } else {

        if (num1 < num2) {
            for (let i = num1; i <= num2; i++) {
                numbers.push(i);
            };
        } else if (num1 > num2) {
            for (let i = num2; i <= num1; i++) {
                numbers.push(i);
            };
        };
        for (const num of numbers) {
            total += num;
        };
    };
    return total;
};

// Do not edit below this line
module.exports = sumAll;
