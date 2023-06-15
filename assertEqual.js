const sumBuggy = function(a, b) {
    return a * b;
}

console.assert(sumBuggy(1, 2) === 3);

const assertEqual = function(actual, expected) {
    if (actual === expected) {
        return ("Assertion Passed: " + actual + " === " + expected)
    }
    else if (actual != expected) {
        return ("Assertion Failed: " + actual + " !== " + expected);
    }
};

console.log(assertEqual("Lighthouse Labs", "lighthouse Labs"));