const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

const assertEqual = (actual, expected) => {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    }
  };

console.log(assertEqual(tail([5, 6, 7]), [5, 6, 7]));