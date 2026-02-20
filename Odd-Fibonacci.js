let sumFibs = (num) => {

  let arr = [0, 1]
  let i = 0;
  while (arr[i] + arr[i + 1] <= num) {
    arr.push(arr[i] + arr[i + 1]);
    i++;
  }
  let sum = 0
  for (let ele of arr) {

    if (ele % 2 === 1) {
      sum += ele
    }
  }

  return sum
}
console.log(sumFibs(1000))
