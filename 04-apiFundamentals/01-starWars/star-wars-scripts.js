let starWarsPeopleList = document.querySelector('ul');
//* Idea is that we want a listing of starwars people

//* use fetch to 'GET' (retrival of data)

fetch('https://swapi.dev/api/people')
    .then(function (response){
        console.log(response);  //returns Response{type:'cors',url:"https://swapi.dev/api/people"....}
        return response.json();
    })
    .then(function(json){
        console.log(json);
        let people = json.results; //acessing the results [] on the json obj. They display 10 at a time.
        for(let person of people){
            const li = document.createElement('li');
            li.textContent = `
                             Name = ${person.name}
                             Height = ${person.height}
                             Mass = ${person.mass}
                             Hair Color = ${person.hair_color}
                             Skin Color = ${person.skin_color}
            `
            starWarsPeopleList.appendChild(li);
        }
    });