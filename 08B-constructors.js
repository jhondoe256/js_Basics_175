//* if an object has one or more methods, it is said to have 'behavior'
// think of a person that can do many things

//* Constructor function
//* if using the 'this' keyword and your running your code in the browser you'll be refering to the GLOBAL 'window' obj
//* if using the 'this' keyword in 'node' the GLOBAL object is global (default for node)
function Character(name,slogan){
    console.log("this: ",this);  //'this' refers to "this created obj, not the above defaults"
    this.name = name;
    this.slogan = slogan;
    this.speak = function(){
        console.log(this.slogan);
    }
    this.attack = function(){
        console.log(`${this.name} just attacked!`);
    }
}

let mario = new Character("Mario","Let's A Go!!!");
console.log(mario);
mario.speak();
mario.attack();