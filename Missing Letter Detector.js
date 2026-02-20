function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let x = alphabet.indexOf(str[0]);
  for (let i = 0; i < str.length; i++) {
    if (str.toLowerCase()[i] != alphabet[i + x]) {
      return alphabet[i + x]

    }
  }
  if (str.toLowerCase() == alphabet) {
    return undefined
  }
}
console.log(fearNotLetter("stvwx"))