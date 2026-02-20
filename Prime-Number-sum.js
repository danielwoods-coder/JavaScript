function sumPrimes(num) {
  let arr = [];
  for (let i = 2; i <= num; i++) {
    arr.push(i)
  }

  const primeNumArray = arr.filter(item => {
    let arr1 = [];
    for (let i = 2; i < item; i++) {
      arr1.push(i)
    }
    return arr1.every((x => item % x !== 0))
  })
  if (num < 2) {
    return 0
  } else {
    return primeNumArray.reduce((a, b) => a + b)
  }
}
console.log(sumPrimes(100000))