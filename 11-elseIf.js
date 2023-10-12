//* 'else/if' Statements

/*
    Syntax:
    if(condition){
        code that is executed if condition is true
    }else if(condition2){
        code that is executed if condition2 is true
    }else{
        so if condition and condition2 fails this code block will be executed
    }
 */

//* Examples

let character = "Rouge";

//todo:   if (character === "Bard") {
//todo:     console.log("You sing nice songs");
//todo:   } else if (character === "Warrior") {
//todo:     console.log("You beat things up.");
//todo:   } else if (character === "Rouge") {
//todo:     console.log("You use stealth.");
//todo:   } else if (character === "Wizard") {
//todo:     console.log("You use magic.");
//todo:   } else {
//todo:     console.log("What type of character is this??");
//todo:   }

if (character === "Bard") console.log("You sing nice songs");
else if (character === "Warrior") console.log("You beat things up.");
else if (character === "Rouge") console.log("You use stealth.");
else if (character === "Wizard") console.log("You use magic.");
else console.log("What type of character is this??");

//* Order matters!

let temp = 57;

// if (temp >= 50) {
//   console.log("It is cool");
// } else if (temp >= 65) {
//   console.log("It's warm");
// } else if (temp > 80) {
//   console.log("It's hot.");
// } else {
//   console.log("It is cold");
// }

//* better results!
if (temp > 80) {
  console.log("It's hot.");
} else if (temp >= 65) {
  console.log("It's warm");
} else if (temp >= 50) {
  console.log("It's cool");
} else {
  console.log("Its cold.");
}
