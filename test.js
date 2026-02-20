function frankenSplice(arr1, arr2, num) {
  let arr1Copy = arr1.slice();
  let arr2Copy = arr2.slice();

  for (let i = 0; i < arr1Copy.length; i++) {
    arr2Copy.splice(num + i, 0, arr1Copy[i])
  }

  return arr2Copy
}
let x = [2, 9, 5];
let y = [0, 8, 6];
console.log(frankenSplice(x, y, 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(frankenSplice([1, 2, 3], [4, 5], 1));