var readlineSync = require("readline-sync");
console.log("DO YOU KNOW QUIZ! BY Akshay \n")
var userName = readlineSync.question("What's your name? \n")
console.log("Welcome " + userName + " To DO YOU KNOW Akshay?")
var score = 0
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer == answer) {
    console.log("Right!");
    score = score + 1;
  }
  else {
    console.log("Wrong")
  }
  console.log("Your total score is ", score)
}
var highestScore = [
  {
    name: "Aditya",
    score: 3,
  },
  {
    name: "Rushabh",
    score: 4
  }
]
var questions = [{
  question: `Where do I live ?
  a:Mumbai
  b:Bangalore
  c:Delhi
  `,
  answer: "a"
}, {
  question: `What is My College Name: 
  a:IIT Bombay
  b:VJTI
  c:DJ Sanghvi
  `,
  answer: "c"
}, {
  question: `Which Branch am I Pursuing :
  a:IT
  b:Computer
  c:EXTC
  `,
  answer: "b"
}, {
  question: `In which year do I study :
  a:1st Year
  b:2nd Year
  c:3rd Year
  `,
  answer: "b"
}, {
  question: `What is my favourite sport ? :
  a:Cricket
  b:Football,
  c:Badminton
  `,
  answer: "a"
}];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log("\n")
console.log("Previous Highest Scores were : ")
for (var i = 0; i < highestScore.length; i++) {
  currScore = highestScore[i];
  console.log(currScore.name);
  console.log(currScore.score);
  console.log("--------------");
}
if (score > currScore.score) {
  console.log("You might have the highest score,Send me the Screen Shot,So that I can Update the Score,Well Played.")
}

console.log("Thank You for Playing")