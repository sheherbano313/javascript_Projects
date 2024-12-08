//   let gameNum = 25;
//   let userNum = prompt("Guess The Game Number: ")
//   while (userNum != gameNum){
//     userNum = prompt("You entered wrong number. Guess the Number Again")

//   }
//   console.log("Congratulation, You entered the right number")

let gameNum = 25;
let userNum = Number(prompt("Guess The Game Number: "));  // Convert input to a number

while (userNum !== gameNum) {  // Use strict equality to avoid type coercion
    userNum = Number(prompt("You entered the wrong number. Guess the Number Again: "));
}

console.log("Congratulations, You entered the right number!");