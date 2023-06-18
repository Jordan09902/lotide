

var array = [1];

let sum = 0;
let length = array.length
let mid = array.length / 2;
let emptyArray = [];

const middle = function(array) {
for (var i = 0; i < array.length; i++) {
if (length <= 2) {
return emptyArray;
}
else if (length % 2 === 0) {
    return [array[mid - 1], array[mid]];
}
else if (length % 2 === 1) {
    sum += array[i];
    
    

}
}
sum = sum / length;
    return sum;
}

console.log(middle(array))