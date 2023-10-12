function CreateCharacter(firstName,slogan){
    return{
        firstName,
        slogan,
        speak:function(){
            console.log(slogan);
        },
        attack:function(){
            console.log(`${this.firstName} just Attacked!`);
        }
    }
}

//we can dynamically create/delete properties in Js
const mario = CreateCharacter("Mario","I love Shrooms!");

//want to iterate (loop) and display all 'Keys'
//for..in loop for objs that are NOT arrays!
for(let key in mario){
    console.log(key);  //firstName, slogan, speak, and attack
}

//what if we want the key/value pairs?
for(let key in mario){
    console.log(key, mario[key]);
}

console.log("========================================================");
//lets display the key/value pair that is not of type 'function'
for(let key in mario){
    if(typeof mario[key] !== 'function'){
        console.log(key, mario[key]);
    }
}

console.log("=========================for..of===============================");
console.log("For..of are for arrays!!!!!");

const items = ["Dude",1,33,22,12,"Stan"];

for(let item of items){
    console.log(item);
}