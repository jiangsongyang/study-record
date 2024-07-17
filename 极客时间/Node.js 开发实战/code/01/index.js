const palierAction = process.argv[process.argv.length - 1];

const random = Math.random() * 3;

let computerAction = null;

if (random < 1) {
  computerAction = "rock";
} else if (random > 2) {
  computerAction = "scissor";
} else {
  computerAction = "paper";
}

if (computerAction === palierAction) {
  console.log(`平局`);
} else {
  if (
    (computerAction === "rock" && palierAction === "paper") ||
    (computerAction === "scissor" && palierAction === "rock") ||
    (computerAction === "paper" && palierAction === "scissor")
  ) {
    console.log(`you win`);
  } else {
    console.log(`you lose`);
  }
}
