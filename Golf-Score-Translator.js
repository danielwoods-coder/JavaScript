const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par,strokes) {
    if (strokes === 1) {
        return names[0]
    } else if (strokes <= par - 2 ) {
        return "Eagle"
    } else if (strokes === par - 1) {
        return "Birdie"
    } else if (strokes === par) {
        return "Par"
    }
    else if (strokes === par + 1) {
        return "Bogey"
    }
    else if (strokes === par + 2) {
        return "Double Bogey"
    }
    else {
        return "Go Home!"
    }
}
let result =golfScore(1,1)
console.log(result)