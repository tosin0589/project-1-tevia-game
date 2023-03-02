import rl from "readline-sync";
import inquirer from "inquirer";
import chalk from "chalk";

function welcomeMessage() {
  console.log(chalk.bgBlue("Welcome to TEVIA!! "));
  const userName = rl.question("What is your name?: ");
  console.log("\n");
  console.log("Welcome to the game," + userName + "!");
  console.log("\n");
  console.log("\n");

  function rulesOfGame(rules) {
    console.log(chalk.bgRed("Rules Of Game"));
    console.log("You loose a point for each question failed");
    console.log("Game is over if you fail 5 questions");
    console.log("Good Luck!!");
    let playerChoice = rl.question("Press enter to continue.");
    console.log("\n");
  }
  rulesOfGame();
}
const questions = [
  {
    question: `What was the first fruit that was eaten on the moon? `,
    a: "Orange",
    b: "Apple",
    c: "Peach",
    answer: "c",
  },
  {
    question: `When people are frightened, their ears produce more what? `,
    a: "Earwax",
    b: "Water",
    c: "Pox",
    answer: "a",
  },
  {
    question: `What sport has been played on the moon? `,
    a: "Tennis",
    b: "Basketball",
    c: "Golf",
    answer: "c",
  },
  {
    question: `When held to ultraviolet light, what animal's urine glows in the dark?`,
    a: "Cat",
    b: "Dog",
    c: "Bird",
    answer: "a",
  },
  {
    question: `From which language did the word "Ketchup" come from?`,
    a: "French",
    b: "Chinese",
    c: "Spanish",
    answer: "a",
  },
  {
    question: `What color is the "black box" in an airplane?`,
    a: "Blue",
    b: "Black",
    c: "Orange",
    answer: "c",
  },
  {
    question: `What ailment kills the most fruit flies?`,
    a: "Diarrhea",
    b: "Constipation",
    c: "Fever",
    answer: "b",
  },
  {
    question: `In Alaska, it's legal to shoot bears, but illegal to do what?`,
    a: "Throw stones",
    b: "Wake one up",
    c: "Take pictures",
    answer: "b",
  },
  {
    question: `Where were the first fortune cookies invented?a`,
    a: "San Francisco",
    b: "Seattle",
    c: "Texas",
    answer: "a",
  },
  {
    question: `What does the term "piano" actually mean?`,
    a: "To be played to an audience",
    b: "To be played softly",
    c: "To be played slowly",
    answer: "b",
  },
];

console.log("\n");
let playerScore = 0;
let wrongScore = 0;
function startGame() {
  for (let i = 0; i < questions.length; i++) {
    let qu = i + 1;
    console.log(chalk.bgBlack(qu + ". " + questions[i].question));
    console.log(chalk.green("a: " + questions[i].a));
    console.log(chalk.green("b: " + questions[i].b));
    console.log(chalk.green("c: " + questions[i].c));

    let answer = rl.question("Answer : ");

    if (answer === questions[i].answer) {
      console.log(chalk.bgBlue("Correct!!!"));
      console.log(".......");
      playerScore++;
    } else {
      console.log(chalk.bgRed("Wrong!!!"));
      wrongScore = wrongScore + 1;
      console.log(".......");
      if (wrongScore === 5) {
        break;
      }
    }
  }
}
function printResult() {
  if (playerScore > 8 || playerScore === 10) {
    console.log(chalk.bgBlue(" :) Congratulations!!! You won the game!"));
  } else {
    console.log(chalk.bgRed(":( Ooops!Failed! Try again."));
  }
}
welcomeMessage();
startGame();
console.log("..................................................");
console.log("Your final score is " + playerScore + "/10");
printResult();
