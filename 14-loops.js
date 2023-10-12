//* Loops -> Allows us to repeatedly execute a block of code until a condition is met.

// 'Loops' are great for iterating through things or doing the same action multiple times.
// there are a number of different types

// let's look at the 'for loop'

/*
    Syntax
                1.                       2.                          3.
                                                        (your choice-> default is incrementExpression)
        for([initialExpression];[contidtionalExpression];[incrementExpression/decrementExpression])
        {
            For loop body (code to be executed each loop)
        }
 */

// 1. 'initialExpression' -> sets the starting value of a loop control variable (LCV).

// 2. 'conditionExpression' -> is evaluated, if 'true', stay in the loop, otherwise exit the loop.

// 3. 'incrementExpression' -> updates the LCV.

//! WATCH OUT FOR INFINATE LOOPS!!!
//! if this happens you code 'may' continue to run, use 'ctrl+c' to stop the code from running

//* for-loop Example

//todo: Print a range of numbers into the console from 1 to 100 by 1's!
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.log("=========================================");

//todo: loop from 0 to 50 by 5's
for (let i = 0; i <= 50; i += 5) {
  console.log("Number:", i);
}

console.log("=========================================");

//todo: loop from 25 to 200 by 25's. start at 25
for (let i = 25; i <= 200; i += 25) {
  console.log("Number:", i);
}

console.log("=========================================");

//todo: count to 10 by 5's. start at 100 (do what we do, but in REVERSE....)
for (let i = 100; i >= 10; i -= 5) {
  console.log("Number:", i);
}
