function generatePassword(leng) {
    let cha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    let result = new Array(leng);

    for (let i = 0; i < leng; i++) {
        let randomNum = Math.floor(Math.random() * cha.length);
        result[i] = cha[randomNum];
    }
    return result.join('');
}
const password = generatePassword(20);
console.log(`Generated password: ${password}`)

function Password(leng) {
    let cha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    let result = "";

    for (let i = 0; i < leng; i++) {
        let randomNum = Math.floor(Math.random() * cha.length);
        result += cha[randomNum];
    }
    return result;
}
const password2 = Password(12);
console.log(`Generated password: ${password2}`)