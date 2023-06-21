const assertEqual = function(actual, expected) {
    if (actual === expected) {
        return (`Assertion Passed: ${actual} === ${expected}`)
    }
    else if (actual != expected) {
        return (`Assertion Failed: ${actual} !== ${expected}`);
    }
};




const countLetters = function(stringVar) {
    let lettersCount = {};
    for(const letter of stringVar){
        if (letter !== " ") {
            if (!lettersCount[letter]) {
                lettersCount[letter] = 1;
            }
             else {
                lettersCount[letter] += 1;
            }
        }
    }
    return lettersCount;
}

console.log(countLetters("llllllllhhhjj"));

const countNumbers = function(numbers) {
    let numbersCount = {};
    for(const number of numbers) {
        if (number !== " ") {
            if (!numbersCount[number]) {
                numbersCount[number] = 1;
            } else {
                numbersCount[number] += 1;
            }
        }
    }
    return numbersCount;
}

console.log(countNumbers([1, 2, 3, 1, 2, 5]))
