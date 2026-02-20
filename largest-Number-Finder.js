function largestOfAll(arrOfArr) {
  let result = [];
  for (let i = 0; i < arrOfArr.length; i++) {

    let maxNum = arrOfArr[i][0];
    for (let num of arrOfArr[i]) {
      if (num >= maxNum) {
        maxNum = num
      }
    }
    result.push(maxNum)
  }
  return result
}
console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))