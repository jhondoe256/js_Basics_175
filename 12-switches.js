//* switch statements

/*
    Syntax
     1.
*    switch(expression){
?    2.   case 'x':
*    3.   code block
!    4.   break;
?    5.   case 'y':
*         code block
!         break;
?    8.   case default:
*         code block
!         break;
    }
 */

//todo:  1. We start with the 'switch' statement keyword.
//todo:     inside of the parenthesis you add the value you are testing.

//todo:  2. We use the 'case' keyword followed by a choice that the 'expression' in parenthesis above could be

//todo:  3. If the 'expression' matches the 'case' here then the code will run

//todo:  4. The 'break' keyword is added here so that if the 'case' is met it will 'break' out of the
//todo:     'switch case' and move on instead of checking the other 'cases' below.

//todo:  5. We have another case. There can be as many 'cases' as you want to satisfy your 'control-flow'

//todo:  8. Similar to ending an 'else if statement' with 'else', the 'default' code block will run if
//todo:     none of the above 'cases' match the incomming 'expression'

//* Examples

let ingredients = "Yabba dabba do!!!";

switch (ingredients) {
  case "Ground Beef":
    console.log("I'll make Hamburgers");
    break;
  case "Salmon":
    console.log("I'll make grilled Salmon");
    break;
  case "Chicken":
    console.log("I'll make chicken Tacos.");
    break;
  default:
    console.log("I guess I should order somthing.");
    break;
}

//* lets use if/else..if again...
let answer = "B";

//todo:  if (answer === "A" || answer === "B") {
//todo:    console.log("Gryffindor");
//todo:  } else if (answer === "C" || answer === "D") {
//todo:    console.log("Hufflepuff");
//todo:  } else if (answer === "E" || answer === "F") {
//todo:    console.log("Ravenclaw");
//todo:  } else if (answer === "G" || answer === "H") {
//todo:    console.log("Slytherin");
//todo:  } else {
//todo:    console.log("Must be a Muggle.");
//todo:  }

switch (answer) {
  case "A":
  case "B":
    console.log("Gryffindor");
    break;
  case "C":
  case "D":
    console.log("Hufflepuff");
    break;
  case "E":
  case "F":
    console.log("Ravenclaw");
    break;
  case "G":
  case "H":
    console.log("Slytherin");
    break;
  default:
    console.log("Must be a Muggle.");
    break;
}

//todo: switch (answer.toLowerCase()) {
//todo:     case "A".toLowerCase():
//todo:     case "B".toLowerCase():
//todo:       console.log("Gryffindor");
//todo:       break;
//todo:     case "C".toLowerCase():
//todo:     case "D".toLowerCase():
//todo:       console.log("Hufflepuff");
//todo:       break;
//todo:     case "E".toLowerCase():
//todo:     case "F".toLowerCase():
//todo:       console.log("Ravenclaw");
//todo:       break;
//todo:     case "G".toLowerCase():
//todo:     case "H".toLowerCase():
//todo:       console.log("Slytherin");
//todo:       break;
//todo:     default:
//todo:       console.log("Must be a Muggle.");
//todo:       break;
//todo:   }