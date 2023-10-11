//* Booleans

/*
    YES/NO
    ON/OFF
    TRUE/FALSE
 */

//* Examples
let isLoggedIn = true;
// console.log(typeof isLoggedIn);

let isAuthenticated = true;
let hasLoggedInToday = false;
let hasToken = false;

//* Comparison Operators
//todo: comparison/relational operators will evaluate to a boolean value, these will ALLWAYS be true/false
console.log(2 == '2');      //true
console.log(2 === '2');    //false (checks the 'type' as well as the 'value')
console.log(2 != 3);      //true
console.log(2 !== '2');  //true since, they are not equal then it evaluates to true
console.log(5 > 5);     // false
console.log(5 >= 5);   // true
console.log(7 <= 8);  // true
console.log(8 <= 8); //true

let test = 2 >= 3; // 2 >= 3, this will evalueate to true/false and that value will be stored in 'test'
console.log(`test: ${test}`); 

//* Logical Operators -> we will use 'operands' which will evalueate to either true/false
//* operands -> operandA and operandB
let operandA = true;
let operandB = true;

//* Logical and (&&) -> operandA and operandB both have to evaluate to true.
console.log(`operandA: (${operandA}) && operandB:(${operandB}): ${operandA && operandB}`);

operandA = false;
console.log(`operandA: (${operandA}) && operandB:(${operandB}): ${operandA && operandB}`);

operandB = false;
console.log(`operandA: (${operandA}) && operandB:(${operandB}): ${operandA && operandB}`);

operandB = true;

//* Logical Or (||) -> only one operand needs to be true for this to return true
//* at this point operandA = false, and operandB is true;
console.log(`operandA: (${operandA}) || operandB:(${operandB}): ${operandA || operandB}`);

operandB = false;
//* at this point operandA = false, and operandB is false;
console.log(`operandA: (${operandA}) || operandB:(${operandB}): ${operandA || operandB}`);

//* Logical Not (!) -> think of this as opposite or inverse
console.log(`operandA: !(${operandA}): ${!operandA}`);

operandB = true;
console.log(`operandB: !(${operandB}): ${!operandB}`);