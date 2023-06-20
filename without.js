/*without(source, itemsToRemove)
arrayFinal = [...source]
Shaun Purslow
3:15 PM
loop through itemsToRemove
Loop through source
itemsToRemove[i] === arrayFinal[j]

if() ^ match
arrayFinal.splice(j, 1)*/



let source = ["1", "2", "3"];
let itemsToRemove = [1, 2, "3"];

let removedValues = "";

const implementWithout = function(source, itemsToRemove) {
     
    for (var i = 0; i < source.length; i++) {
        for (var j = 0; j < itemsToRemove.length; j++) {
            if (source[i] === itemsToRemove[j]) {
                removedValues = source.splice(i, 1);
                
            }
        }
    
    }
    return source;

}

console.log(implementWithout(source, itemsToRemove))