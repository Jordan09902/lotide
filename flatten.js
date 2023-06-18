let nestedArray = [1, 2, 3, [4, 5, 6]];

const flatten = function(nestedArray) {
   
    nestedArray = nestedArray.flat();
    return nestedArray;

}

console.log(flatten(nestedArray))

