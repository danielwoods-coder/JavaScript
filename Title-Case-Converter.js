function titleCase(str) {

    let arr = str.split(" ");
    let arr1 = [];
    for (let item of arr) {
        item = item.replace(item.slice(1), item.slice(1).toLowerCase())
        item = item.replace(item[0], item[0].toUpperCase())
        arr1.push(item)
    }
    return arr1.join(" ")
}
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))