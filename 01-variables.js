//* variables are containers for storing info in our program.
//* They are declared and initialized with a value

//? variable Declaration -> the variable is declared, but it hasn't been assigned a value
let myFirstValue; 

/*
todo:   rules when it comes to variables 
todo:   Name must begin with a letter, dollar sign($), or underscore(_)
todo:   Name must not be a reserved Javascript keyword within the Javascript language
todo:   Name must be descriptive an brief (meaningful)
todo:   Ex: isTrue, environmentStatus, etc. 
*/

//When creating a variable use the 'let' keyword

//Declaration -> patientId at this 'point' has no value, so it's undefined
let patientId;

console.log(patientId);

// Initialization -> we're basically assigning a value to patientId
patientId = 120023;

//we are logging all of the contents of the box called 'patientId'
console.log(patientId);

let lastName;

// Initialization
lastName = 'Doe';

// Re-initialization -> we are reassigning a value to an existing 'variable container'
lastName = "Smith";


//Declaration and Initialization
//this is one of the primary ways to do this
let orangeJuiceContainer = "empty";

console.log(orangeJuiceContainer);

//var -> old way of dynamically storing a variable, this isn't considered good practice b/c of 'hoisting' 
//hoisting -> when the application is 'run' or starts, anything with the 'var' keyword is hoisted or put to the top 
//            of the page.
//            this can be detremental to any variable within a method/function that has a very 'specific' purpose.
//            (we will get back to this)

//let -> this is the 'new' way of dynamically storing a variable, this will not allow the variable to be hoisted to the top of the file 
//       when the app is running 

//const -> (short for constant), cannot be modified once you have declared and initialized its value.
//          If you want to declare something were its value never changes use 'const'

const pi = 3.14;

let radius = 33;

let evaluation = pi* Math.exp(radius)
console.log(evaluation);

// const today = 'Tuesday';
// today = 'Wednesday';
// console.log(today); //! we get: TypeError: Assignment to contant variable


//* Naming Conventions
//* camelCasedNamingConvention -> First letter of the first word is lower-cased, and any following word(s) that are attached their first letter is Capitalized.
//* PascalCaseNamingConvention -> First letter of the first word is Capitalized, and any following word(s) that are attached their first letter is Capitalized.
//* snake_case_naming_convention -> using underscore to seperate words.

//* We will focus on camelCasedNamingConvention, and PascalCaseNamingConvention(s)

//* Challenge -> look around your house and make variables that represent any item

//* Example: PS5

let hasDiskDrive = false;
let hasPressedButton = true;
let friendCount = 50;
