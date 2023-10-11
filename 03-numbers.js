//* In Js there is only one way to represent most kinds of numbers
//* that that 'type' is the 'Number' type

//* Number type comes in many forms
/*
 *    0
 *    1   -> positive numbers
 *    .99 -> decimals
 *    -42 -> negative numbers
 *    NaN -> not a number (something has going wrong)
 */

// Storing them into some variables
let theMeaningOfLife = 42;

const indianaIncomeTaxRAte = 0.0323;

let powerLevel = 9001;

let southPoleTempF = -44;

let spaceStationCrewCoutn = 7;

const iAmNotANumber = NaN;

// Arithmetic Operators
1 + 1; //Addition -> adding two values
12 - 10; //subtraction -> subtracting two values
125 * 1.07; //Multiplication -> multiplying two values
125 / 4; //Division -> dividing two values
10 ** 2; //Exponetiation -> take the first number and raise it to the power of the second number
15 % 2; // Modulus -> does division , and returns the 'remainder' value

console.log(15 % 2);

// Weird Js Behavior

// it should equal (0.3)
console.log(0.1 + 0.2); // we get: 0.30000000000000004
console.log(Math.ceil(0.1 + 0.2));

//Putting things together:

/*
    You are out after a dinner with friends in Indiana and the bill hits the table. It's a whopping $132.96. 
    Instead of waiting on everyone to fumble with their phones and open a calculator app (or the friend who might solve it on a napkin), 
    you decide you want to "flex" your newfound programming skills and show off to your friends. 
    Everyone decides to split the bill evenly after calculating tax. A quick survey of the table shows there are 4 people. 
    With the JavaScript lets write out a procedure that gives everyone the correct amount to contribute toward the bill.
*/

//* Identify the 'key' peices of the problem

//* Dinner is in INdiana, so, we need to know the sales tax (0.07) - (this will be calculated with the total)

//* The total bill is $132.96

//* We are going to split it evenly

//* There are 4 friends, but dont forget yourself! So that makes 5 total people

//* lets write some code

//todo: the total amount $132.96
let billAmount = 132.96;

//todo: 5 total people
let totalPeople = 5;

//todo: Indiana sales tax
const salesTax = .07;

//todo: Calculate the amount of tax on the bill
let taxAmount = billAmount * salesTax;

let grandTotal = billAmount + taxAmount;

//todo: Calculate how much each person will pay
let indiviualContribution = grandTotal/totalPeople;

console.log(indiviualContribution);

