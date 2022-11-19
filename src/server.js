import express from "express";
import { questions } from "./quiz.js";
const app = express();
const PORT = 5000;
app.use = express.json();
let userName;
let i = questions;
let playerScore = 0;
let wrongScore = 0;

//Welcome message
app.get("/welcome", (req, res) => {
  res.send(`"Welcome to TEVIA!! "
    What is your name?: 
     Send it to http://localhost:5000/userName?name=<>`);
});
//Rules Of Game
app.get("/userName", (req, res) => {
  userName = req.query.name;
  res.send(`Hello ${userName}, welcome to the game!;
    "Rules Of Game."
     "You loose a point for each question failed"
     "Game is over if you fail 5 questions"
     "Good Luck!!"`);
});
//List all questions
app.get("/questions", (request, response) => {
  console.log(request.body);
  response.send(questions);
});

app.get("/currentQuestion", (request, response) => {
  for (let i = 0; i < questions.length; i++) {
    let qu = i + 1;
    let currentQuestion = qu + ". " + questions[i].question;
    response.send(
      questions[i].question +
        "a: " +
        questions[i].a +
        " " +
        "b: " +
        questions[i].b +
        " " +
        "c: " +
        questions[i].c
    );
  }
});

app.listen(PORT, function () {
  console.log(`Listening on Port ${PORT}`);
});
