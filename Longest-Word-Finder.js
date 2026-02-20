function findLongestWordLength(str) {
  let arr = str.split(" ")
  let arrNum = [];
  for (let word of arr) {
    arrNum.push(word.length)
  }
  let x = arrNum[0]
  for (let num of arrNum) {
    if (num >= x) {
      x = num
    }
  }
  return x
}
console.log(findLongestWordLength("May the force be with you"))