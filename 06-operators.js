//* Operators -> tells the Js interpreter which Mathmatical or logical operation to proform

console.log(5 + 5); //Addition operator (+)
console.log(5 - 5); //Subtraction operator (-)
console.log(5 * 5); //Multiplication operator (*)
console.log(5 / 5); //Division operator (/)
console.log(5 ** 5); //Exponet operator (**)

//* Modulo -> returns the 'remainder' of division calculation
console.log(10 % 4); //* prints 2
console.log(10 % 9); //* prints 1

//* Assignment operator (=) -> whatever is on the right of the equal sign will be assigned to the value on the left
let x = 5;
let y = 2;
let z = 7;

console.log(x, y, z); //* 5,2,7

//* Comparison Operators
//  checks to see if something is greater than , less than, or equal to something else

//* what are the comparison operators?
/*
    '=='  Equality
    '===' Strict Equality
    '!='  Inequality
    '!==' Strict Inequality
    '>'   Greater than
    '<'   Less than
    '<='  Less than or Equal
    '>='  Greater than or Equal
 */

//* Example
let numTwo = 2;
let two = "2";
console.log(numTwo == two); // true, not checking for the numberic value
console.log(numTwo === two); //false (equality and type are not the same, strict equality )

//* Inequality operator -> if the two values are different than one another, we will return true
let userName = "Paul";
let age = 30;
console.log(userName != age); //returns true

//* More Examples
/*
 *   2 == '2'   -> returns true  =>                         This checks for equality, not type
 *   2 == '1'   -> returns false =>                         This checks for equality, not type
 *   2 ==='2'   -> returns false =>                        Equality is the same, but the type is different
 *   2 === 2   ->  returns true  =>                         Equality and type our the same
 *   "Passwod12!!" === "Passwod12!!" ->  returns true  =>   Equality and type our the same
 */
console.log("=========");
console.log(2 == "2");
console.log(2 == "1");
console.log(2 === "2");
console.log(2 === 2);
console.log("Passwod12!!" === "Passwod12!!");

//* Shorthand operators
let count = 2;
count = count + 1;
console.log(count); //* prints 3

//* we could...
count += 1; // count is 3, but we are adding one, so 3+1, which is 4
console.log(count);

//there is another way...
count++; // count is now 4, so 4 + 1 = 5
console.log(count);

//we can also use these shorthand operations
/*  operator     Example           Equivalent
 *     +=         a += b             a = a+b;
 *     -=         a -= b             a = a-b;
 *     *=         a *= b             a = a*b;
 *     /=         a /= b             a = a/b;
 *     %=         a %= b             a = a%b;
 */

let value = 5;
value = value + 1;
value += 1;
console.log(value); //7

let addMe = 10;
console.log(`addMe: ${addMe}`);
addMe += 1;
console.log(`addMe: ${addMe}`); //11

let a = 20;
a -= 1;
console.log(`a: ${a}`); //19

let b = 25;
b *= 2;
console.log(`b:${b}`); //50

let c = 50;
c /= 2; //-> 50/2
console.log(`c: ${c}`); //25

let someAge = 40;

someAge += 1; //41
console.log(someAge);

someAge -= 20;
console.log(someAge);

someAge *= 20;
console.log(someAge);

console.log(2 > 1); //true

console.log(3 < 2); //false

let test = 2 >= 3; //false
console.log(test);

//concatinate a string value and print into the console
// console.log("Two is greater than one?" + " " + (2 > 1));
console.log("Two is greater than one? "+ (2 > 1));
console.log(3 >= 1); //true