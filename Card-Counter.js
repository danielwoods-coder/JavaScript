let count = 0;
function cardCounter(card) {
  switch (card) {
    case 2:
      count = ++count;
      break;
    case 3:
      count = ++count;
      break;
    case 4:
      count = ++count;
      break;
    case 5:
      count = ++count;
      break;
    case 6:
      count = ++count;
      break;
    case 7:
      count += 0;
      break;
    case 8:
      count += 0;
      break;
    case 9:
      count += 0;
      break;
    case 10:
      count = --count;
      break;
    case "J":
      count = --count;
      break;
    case "Q":
      count = --count;
      break;
    case "K":
      count = --count;
      break;
    case "A":
      count = --count;
      break;
  }
  if (count > 0) {
    return `${count} Bet`
  } else {
    return `${count} Hold`
  }
}

console.log(cardCounter(6));
console.log(cardCounter(5));
console.log(cardCounter("A"));
console.log(cardCounter("A"));
console.log(cardCounter("A"));