//* Objects -> a datatype that allows us to store a collection of properties and methods

//* Object literal -> Js object that contains key/value pairs

//1       //2
let zelda = {
  //3      4
  name: "Zelda",
  age: 17,
  title: "Princess",
  isCaptured: true,
};

/*
    1. Objects can be stored within variables
    2. Objects use '{}' to surround its data
    3. [name],'age',[title], and [isCaptured] are all properties on the Zelda object
*/

/* 2 ways to select a property on an object

//* 1 Dot notation

/*
* The dot (.) operator gives you access to the objects properties and their values.
*  Use the objects name, then the (.) and then the property name. This accesses the value of the property
*/

//*Ex:
console.log(zelda); //prints the entire object literal
console.log(zelda.name); //prints the name Zelda

console.log(zelda.age); //prints 17

console.log(zelda.middleName); // prints undefined => the 'key' midlleName does not exist

zelda.middleName = "Your Mom";

console.log(zelda.middleName);

zelda.myOwnVariableName = "DUDE";
console.log(zelda.myOwnVariableName);

//* Challenge(s)

//* Make a Friend Object with at least 4 properties

//* Make another object called Movie with 3 properties

//* Make an object about anything your want (recipe, car, sportsteam, etc..)
const mario = {
  name: "Mario",
  slogan: "It's me Mario!!",
  isAlive: true,
  hasPowerUp: false,
};

console.log(mario);
