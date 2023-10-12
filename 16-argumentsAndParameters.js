//* Arguments and Parameters

//* 'Functions' can also accept values known as 'arguments' if the correct 'parameters' are set up.

//* Parameters -> are the names listed in the parentheses of the function definition (when we are creating the function)

//* Arguments -> are the real values received by the 'function' when you call it. (happen at runtime)

/*
todo:   *Think of being the devloper and defining a function for future use*
todo:                    (bottle,cap) -> these are the Parameters (slots), which are placeholders for inputs*
todo:                                       for future use (when we invoke the function)*
*    function bottleCapper(bottle,cap){
*        return bottle + cap;
*    }
*         when this function is called later in the application
          bottleCapper("green bottle","white cap");
todo:                 ("green bottle","white cap") => these are the 'arguments' that are being passed into the 
todo:                                                 function/method at runtime. 
 */

function bottleCapper(bottle, cap) {
  return bottle + cap;  //string concatination, using the (+) sign to combine two strings!!!
}

let returnedValue = bottleCapper("sprite ","green cap");
console.log(returnedValue);

//* Single Parameter Function
function numberEntered(num){
    console.log(`The number entered was ${num}`);
}

//* the value of 'num' can be WHATEVER WE WANT!!   
numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered('2');
numberEntered('300');

//* Multiple Parameter Functions
// num1 and num2 are parameters!!!!
function addAnyTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

//Ok, at runtime...
addAnyTwoNumbers(4,5);  //4, 5 -> arguments
addAnyTwoNumbers(6,11); //6, 11 -> arguments
addAnyTwoNumbers(7,8);  //7, 8-> arguments

function subtractTwoNumbers(num1, num2){
    console.log(num1 - num2);
}

subtractTwoNumbers(20,10)
subtractTwoNumbers(3,2)
subtractTwoNumbers(35,200)
