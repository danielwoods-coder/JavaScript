let pairElement = (str) => {
    let arr = str.split("");
    let result = [];
    for (let ele of arr) {
        let arrEmpty = [];
        switch (ele) {
            case "A":
                arrEmpty.push("A", "T")
                break;
            case "T":
                arrEmpty.push("T", "A")
                break;
            case "C":
                arrEmpty.push("C", "G")
                break;
            case "G":
                arrEmpty.push("G", "C")
                break;
        }
        result.push(arrEmpty)
    }
    return result
}

console.log(pairElement("TTGAG"))