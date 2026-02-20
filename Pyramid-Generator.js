function pyramid(str, int, boo) {
    if (boo) {
        let result = "";
        for (let i = 0; i < int; i++) {
            let spa = " ".repeat(i);
            let row = str.repeat(2 * (int - i) - 1)
            result += `\n${spa}${row}`
        }
        return result + "\n"
    } else {
        let result = "";
        for (let i = 0; i < int; i++) {
            let spa = " ".repeat(int - i -1);
            let row = str.repeat(2 * i + 1);
            result += `\n${spa}${row}`
        }
        return result + "\n"
    }
}
console.log(pyramid("p", 5, true))