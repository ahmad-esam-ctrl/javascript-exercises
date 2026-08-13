const repeatString = function (myString, myInt) {
    let finalText = "";
    if (myInt > 0) {
        for (let i = 0; i < myInt; i++) {
            finalText += myString;
        }
        return finalText;
    } else if (myInt == 0) {
        return "";
    } else {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = repeatString;
