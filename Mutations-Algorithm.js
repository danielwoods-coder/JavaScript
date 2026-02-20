function mutation(arr) {
  let x = 0
  for (let letter of arr[1].toLowerCase()) {

    if (arr[0].toLowerCase().includes(letter)) {
      x++
    }
  }
  if (x === arr[1].length) {
    return true
  } else {
    return false
  }
}
