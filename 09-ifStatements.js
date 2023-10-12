//Conditionals -> execute code in our program based on a specific condition
//* These 'conditions' can alter the 'state' or 'flow' of an application

//* 'if' statement -> used to see if a single condition is met. if the code evaluates to 'true' it will be executed!

/*  
    1.      .2                      3.
    if(condition/boolean expression){
?           ...our block of code if (condition/expression) is true
    }

*   1. Any 'if statement' must start with the 'if' keyword.
*   2. The condition that is being cecked is inside the parenthesis.
*   3. If the condition evaluates to 'true' the code inside the curly braces will execute.
*      if evaluates to 'false' the code will not run.
 */

//* Examples:
if (10 > 5) {
  console.log("Yep, 10 is greater than 5");
}

if (10 < 5) {
  console.log("This code will never run 10 is greater than 5.");
}
