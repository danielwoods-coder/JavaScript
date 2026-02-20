function uniteUnique(...arr) {
  let result = [];
  for (let x of arr) {
    for (let y of x) {
      if (!result.includes(y)) { result.push(y) }
    }
  }
 return result
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))