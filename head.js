const head = (arr) => {
    if (arr.length === 0) {
      return undefined;
    }
    return arr[0];
  };

  const assertEqual = (actual, expected) => {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    }
  };

console.log(assertEqual(head([5, 6, 7]), 3));


