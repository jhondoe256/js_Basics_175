//* Factory function => a way to create a generic function

function CreateCharacter(firstName,slogan){
    return{
        firstName,
        slogan,
        speak:function(){
            console.log(slogan);
        }
    }
}

const mario = CreateCharacter('Mario',"It's me Mario!");
console.log(mario);

const luigi = CreateCharacter('Luigi',"It's me Luigi!");
console.log(mario);

mario.speak();
luigi.speak();

const bowser = CreateCharacter("Bowser","Grrrrrr!");
console.log(bowser);

bowser.speak();

bowser.smackYouSoHard = function(character){
    console.log(`Bowser just smacked ${character.firstName} SOOOOOOO HARD!!!`);
}

bowser.smackYouSoHard(mario);
bowser.smackYouSoHard(luigi);
bowser.smackYouSoHard(peach);