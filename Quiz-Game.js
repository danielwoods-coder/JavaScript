let questions = [];
let obj1 = {
    category: "JS",
    question: "which is camelCase?",
    choices: ["bobCamp", "Bobcamp", "bobCAMP"],
    answer: "bobCamp"
}
let obj2 = {
    category: "Math",
    question: "How much months of one year?",
    choices: ["8", "10", "12"],
    answer: '12'
}
let obj3 = {
    category: "CSS",
    question: "What does CSS stand for?",
    choices: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
    answer: 'Cascading Style Sheets'
}
let obj4 = {
    category: "Math",
    question: "Who is the smallest?",
    choices: ["1.2", "1.12", "1.22"],
    answer: "1.12"
}
let obj5 = {
    category: "Math",
    question: "Who is the biggest?",
    choices: ["1.2", "1.12", "1.22"],
    answer: "1.22"
}
questions.push(obj1, obj2, obj3, obj4, obj5);

function getRandomQuestion(arr) {
    let randomNum = Math.floor(Math.random() * 5);
    return arr[randomNum]
}


function getRandomComputerChoice(arr1) {

    let randomNum = Math.floor(Math.random() * 3);
    return arr1[randomNum]
}



function getResults(obj, comChoice) {

    if (comChoice === obj?.answer) {
        return "The computer's choice is correct!"
    } else {
        return "The computer's choice is wrong. The correct answer is: " + obj?.answer
    }
}
let obj = getRandomQuestion(questions);
console.log(obj);
let comChoice = getRandomComputerChoice(obj?.choices);
console.log(comChoice);
console.log(getResults(obj,comChoice));