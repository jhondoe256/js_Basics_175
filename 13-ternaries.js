//* Ternaries


/*
    Syntax
        1.             2.                                                3.
    (condition) ? run this code  if condition evalueates to true : run this code instead
 */

//todo: 1. The condition that you are testing

//todo: 2  After the condition we add a '?' and then the code that will be executed if true

//todo: 3 Next we add ':' and then the code that will run if the condition is false

//* Examples:

let cookies = 7

if(cookies > 0){
    console.log("I'm going to eat a cookie!");
}else{
    console.log("I have no cookies 😭");
}

//* Refactor
(cookies > 0) ? console.log("I'm going to eat a cookie!") : console.log("I have no cookies 😭");