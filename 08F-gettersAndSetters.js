//* constructor function:
function CreateCharacter(firstName,slogan){
    let lives = 3;       // these are 'private' variables
    let coins = 0;       // these are 'private' variables
    this.firstName =firstName;
    this.slogan =slogan;
    this.speak=function(){
     console.log(this.slogan);
    };
    this.attack=function(){
     console.log(`${this.firstName} just Attacked!`);
    };
    this.aquireCoin=function(value){
        coins+=value;
        console.log(coins);
        if(coins>=100){
            lives++;
            coins = 0;
            console.log(coins);
        }
    }
    this.displayTotalLives= function(){
        console.log("Total Lives",lives);
    }
    Object.defineProperty(this,"coins",{  //create getter/setter functions (read/write) only
        get:function(){
            return coins;
        },
        set:function(value){
            coins = value;
        }
    })
 }

 let mario = new CreateCharacter("Mario","It's me Mario!!!");
 mario.aquireCoin(100);

 mario.displayTotalLives();