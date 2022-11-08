import rl from "readline-sync";
import chalk from "chalk";
import { questions } from "./quiz.js";
function welcomeMessage() {
  console.log(chalk.bgBlue("Welcome to TEVIA!! "));
  const userName = rl.question("What is your name?: ");
  console.log(`Hello ${userName}, welcome to the game!`);
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
