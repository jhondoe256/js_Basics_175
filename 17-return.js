//* Return keyword

/*
           The 'return' keyword is mostly used along with 'functions'.
?          What does it do?
        1. The 'return' keyword stops the execution of a function.
        2. The 'return' keyword "pushes" information out of a 'function' and makes it available
           to use elseware.
todo:    *Remember 'return' and 'console.log' are two DIFFERENT things with DIFFERENT behaviors*
 */

function getMyBattingAverage(atBats,numberOfHits){
    let myAverage = numberOfHits/atBats;
    return myAverage;
}

console.log(getMyBattingAverage(250,91));

//?  --whats happening with getMyBattingAverage(250,91)?
//todo: USE THE DEBUGGER!

//* At the 'console.log()' JavaScript sees 'getMyBattingAverage'.

//* JS calls the 'function' and sends '250' into the 'atBats' argument
//* and '91' into the 'numberOfHits' argument

//* JS declares 'myAverage' and initializes it to 'numberOfHits / atBats'.

//* JS will 'return' the value in 'myAverage' to the place where the 'function' is called,
//* which is inside of the parentheses of the 'console.log()'

//* the console will display -> 0.364

//* Console vs. Return

//* console.log() => outputs a message to the web console. 
//*                  the values can be either a 'string' or an 'Js object(s)'

//* return => The return statement ends function execution and specifies a value to be returned to the
//*           function caller

//*CHALLENGES!
//todo: write a function to return the sum of two numbers (parameters)

//todo: write a function with the first and last name as parameters and return the full name

//todo: write a function to calculate and return the totalPrice of a quantity of products, including a 7% tax