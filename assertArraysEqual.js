let arrayOne = [1, 2, 3,];
let arrayTwo = [1, 2, 3,];



const assertArraysEqual = function (arrayOne, arrayTwo) {
    if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {

        if (arrayOne[i] !== arrayTwo[i]) {
            return false;
        } else {
            result = true;
        }
    }
    return result;
}
else {
    return false;
}
}

console.log(assertArraysEqual(arrayOne, arrayTwo))