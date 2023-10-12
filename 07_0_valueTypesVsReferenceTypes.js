// value type behavior -> booleans, strings, numbers, undefined and null

//todo: let a = 20;
//todo: let b = a;

//todo: a = 30;

//* 'a' and 'b' are two INDEPENDENT variables

//* 'a' starts with the value of 20

//* 'b' is only a copy of 'a'

//* the value of 'a' is changed to 30

//* but the value of 'b' is still 20

//todo: console.log(a);
//todo: console.log(b);

//----------------------------------------------------------

//* Reference type behaviour -> Arrays and Objects

let a = { someValue: 30 };
let b = a;
a.someValue = 200;
console.log(a);
console.log(b);

/*
    a
   AX1234 --------> 
                      1234
    b   ---------->  {value:10}
   AX1234
        **The both point to the same object in memory **
        ** If there are changes in either a or b they will be updated in BOTH variables **
*/

//** Primative are copied by VALUE */
//** Objects are copied by their REFERENCE */

let numericValue = 40;

//we are only passing in a 'copy' of numericValue
function incrementNumber(numericValue) {
  //this is calculated between the curly braces
  numericValue++;
  // when we exit these curly braces the value of 'numericValue' -> "dies"
}

incrementNumber(numericValue);
console.log(numericValue);

//todo: pass a value into a function using a Reference Object

let numericObject = { someValue: 30 };
console.log(typeof numericObject);

function incrementNumericObject(numericObject){
    numericObject.someValue++;
}

// the obj is passed by its REFERENCE
// so, the value should update....
incrementNumericObject(numericObject);
console.log(numericObject); // {someValue:31};
