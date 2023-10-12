//* if/else Statements

/*
    Syntax:
    1.
    if(condition){
        2.
        code that is executed if the 'if' statement is true.
    }else{
        3.
        code to be executed if the condition is false.
    }

    * else = "if all else fails" or "default"
 */

//* Examples

//1.
if (10 > 5) {
  console.log("10 is greater than 5");
} else {
  console.log("10 is not greater than 5");
}

//2.
if (10 < 5) {
    console.log("10 is less than 5");
}else{
    console.log("10 is not less than five");
}


//3.
//* we can also use variables with 'conditionals'
let weather = 'sunny with a chance of meatballs!';

if(weather === 'rainy'){
    console.log("Bring an umbrella!☔");
}else{
    console.log("You don't need an umbrella!😎");
}