function maskEmail(email) {
    let keyPosition = email.indexOf('@');
    let maskedReplace = email.slice(1, keyPosition - 1);
    let maskedNum = keyPosition - 2;
    return email.replace(maskedReplace, "*".repeat(maskedNum))
}
let email = '18671369669gyugyuvy@163.com';
console.log(maskEmail(email));