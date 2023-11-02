const reverseString = function(word) {
    var nuevaCadena = "";
    for (var i = word.length - 1; i >= 0; i--) {
        nuevaCadena += word[i];
    }
    return nuevaCadena;
};

// Do not edit below this line
module.exports = reverseString;
