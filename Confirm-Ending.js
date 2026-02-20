function confirmEnding(str1,str2) {
    if (str1.slice(-(str2.length)) == str2){
        return true
    }
    else {
        return false
    }
}
let str1 = "Bastian";
let str2 = "n";
console.log(confirmEnding(str1,str2));
str1 = "Connor";
str2 = "n";
console.log(confirmEnding(str1,str2));