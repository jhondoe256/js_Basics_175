//* Arrays -> used for storing a list or assortment of items of any datatype. (REFERENCE TYPE)

//* An array is a numberically indexed map of values. An array doesn't store one value, it stores a list of values.
//* Allows us to collect items like names, usernames, product names, prices, etc.

/*
*   1. Arrays can be stored in variabls
*   2. Use [] brackets to surround the values in an array.
*   3. Seperate items with commas within the brackets.
*   3. Can have a collection of one type OR can assign multiple types
*/

//* Examples
let rainbowColors = ['Red','Orange','Yellow','Green','Blue','Indigo','Violet'];
console.log(rainbowColors);

let raceWinners = [33, 72, 64];
console.log(raceWinners);

let myFavoriteThings = ['Broccoli',46074,'Zombie Cats from Mars'];
console.log(myFavoriteThings);

//                          0       1  2
let mySecretSpyInfo = ["James Bond",7,true]
console.log(mySecretSpyInfo);

//                    0       1       2
let countryArray = ["USA","Japan","Belgium"];
console.log(countryArray);

//* Accessing Values
// Arrays start at index 0 
console.log(countryArray[2]);  //prints Beligum

console.log(countryArray[0]); //print USA

let dogs = ["Shiba Inu","Husky","Corgi","Great Dane"];
let cats = ["Maine Coon","Bengal","Siamese","Sphynx"];
let birds = ["African Grey Parrot","Canary","Macaw","Finch"];
let fish = ["Goldfish","Neon Tetra","Betta","Guppy"];

//* Print Shiba Inu

//* Print the Second value of the second array

//* Print Guppy

//* Print the first value of the 'birds' array