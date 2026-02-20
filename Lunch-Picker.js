let lunches = [];
function addLunchToEnd(arr, str) {
    arr.push(str);
    console.log(`${str} added to the end of the lunch menu.`);
    return arr
}
function addLunchToStart(arr, str) {
    arr.unshift(str);
    console.log(`${str} added to the start of the lunch menu.`);
    return arr
}
function removeLastLunch(arr) {
    let lastLunch = arr.pop();
    if (lastLunch) {
        console.log(`${lastLunch} removed from the end of the lunch menu.`)
    } else {
        console.log("No lunches to remove.")
    }
    return arr
}
function removeFirstLunch(arr) {
    let firstLunch = arr.shift();
    if (firstLunch) {
        console.log(`${firstLunch} removed from the start of the lunch menu.`);

    } else {
        console.log("No lunches to remove.")
    }
    return arr
}
function getRandomLunch(arr) {
    let num = arr.length;
    let randomNum = Math.floor(Math.random() * num);
    if (arr[randomNum]) {
        console.log("Randomly selected lunch: " + arr[randomNum])
    } else {
        console.log("No lunches available.")
    }

}
function showLunchMenu(arr) {
    let itemsNum = arr.length;
    let result = arr.join(", ");
    if (itemsNum > 0) {
        console.log(`Menu items: ${result}`)
    } else {
        console.log("The menu is empty.")
    }
}
getRandomLunch(["Greens", "Corns", "Beans"])
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"])