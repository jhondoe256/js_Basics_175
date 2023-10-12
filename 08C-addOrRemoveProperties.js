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
console.log(mario);

//dynamically add a property
mario.aquiredPowerupItems = ["Mushroom","Fire-Flower Power"];
console.log(mario);

//dynamically delete a property
delete mario.aquiredPowerupItems;
console.log(mario);