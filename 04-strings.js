//* Strings

// can be written in double quotes -> "Your stirng in here"
// can be written in single quotes -> 'Your stirng in here'

//* Examples

let userName = 'oakibbion12';
console.log(userName);

const stateName = 'Indiana';
console.log(stateName);

let currentLanguage = 'JavaScript';
console.log(currentLanguage);

let phrase = "The quick brown fox over the lazy dog";
console.log(phrase);

let emptyString = '';
console.log(emptyString);


//* Escape sequences  
//   \'
let escapedString = 'I just can\'t belive it\'s not butter!';

let withAQuote = "The doctor said, \"Where is my patient?\", while he ran out the door."

let escapedStringRefactor = "I just can't believe it's not butter!";
let withAQuoteRefactor = 'The doctor said "Where is my patient?", while he ran out the door.';

//* Dynamic String (string template literal)
let firstName = "Jane";
let cartItems = 5;
let greeting = `Welcome ${firstName}! You have ${cartItems} units in your cart.`;
console.log(greeting);

//* Bending strings to your will

//* under the 'hood' strings are nothing more than a collection of characters

//* this is a collection of characters:
const daysOfTheWeek = 'MTWRF';

//todo: console.log() each character 
// this 'string' is 'secretly an array
console.log(daysOfTheWeek[0]);
console.log(daysOfTheWeek[1]);
console.log(daysOfTheWeek[2]);
console.log(daysOfTheWeek[3]);
console.log(daysOfTheWeek[4]);

//Strings have their own methods:
// .replaceAll()
//todo: we want to replace the word 'Apples' to the word 'Oranges' (case sensitive)
const oldMarkup = "The Apples are the best fruit. Apples will dominate other fruits!";
let newMarkup = oldMarkup.replaceAll("Apples","Oranges"); //case-sensitive
console.log(newMarkup);

//todo: check to see if the string contains a word or character
//* .includes() -> this returns true/false value
let stockChoices = 'AAPL,MSFT,GOOG,AMZN,FB';
let containsNetFlixStock = stockChoices.includes('NFLX');
console.log(containsNetFlixStock);

//todo: Change all letters to uppercase/lowercase
let userEmail = "myCoolEmail@MailService.NET";

let allUppercase = userEmail.toUpperCase();
console.log(allUppercase);

let allLowercase = userEmail.toLocaleLowerCase();
console.log(allLowercase);