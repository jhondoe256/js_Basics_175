//* Abstraction -> hide the details and Complexity and only show/expose the essential parts
//* We want to hide 'this.defaultLoation' and 'this.computeOptimumLocation'
//* private properties and Methods
//* we can use the 'let' keyword and then the variable name w/n the obj to make the property private

//* constructor function:
function CreateCharacter(firstName,slogan){
    let lives = 3;              //these two properties are private so cant be accessed with the (.) operator
    let isDead =false;              //these two properties are private so cant be accessed with the (.) operator
    this.firstName =firstName;
    this.slogan =slogan;
    this.speak=function(){
     console.log(this.slogan);
    };
    this.attack=function(){
     console.log(`${this.firstName} just Attacked!`);
    };
    this.loseLife = function(){
        if(lives >= 0 && !isDead){
            lives--;  //we dont need to use the 'this' keyword
            console.log(`${this.firstName} just lost a life!!!`);
        }else{
            isDead =true;  //we dont need to use the 'this' keyword
            console.log(`${this.firstName} is Dead!!!`);
        }
    }
 }

 let mario = new CreateCharacter('mario',"It's me Mario!!!!");

 mario.loseLife();
 mario.loseLife();
 mario.loseLife();
 mario.loseLife();
 mario.loseLife();
