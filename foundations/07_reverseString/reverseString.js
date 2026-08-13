const reverseString = function (word) {
    let finalText = "";
    let len = word.length - 1;
    for (let i = len; i >= 0; i--) {
        finalText += word[i]
    }
    return finalText
};

// Do not edit below this line
module.exports = reverseString;
