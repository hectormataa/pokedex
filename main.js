(function () {
    "use strict"

    var todos = document.getElementById("todos")



    var imageneslista =[];

    var noPokemons = 809

    for (var i = 1; i < noPokemons; i++) {
        var numero = i;
        var liga = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + numero + '.png'
        imageneslista.push(liga)

    }

    var idPokemon = [];
    for (var i = 0; i < noPokemons; i++) {
        idPokemon.push(pokemons[i].id)
    }

    var pokemonName = []
    for (var i = 0; i < noPokemons; i++) {
        pokemonName.push(pokemons[i].name.english)
    }

    var pokemonType = []
    for (var i = 0; i < noPokemons; i++) {
        pokemonType.push(pokemons[i].type[0])
    }

    var pokemonHp = []
    for (var i = 0; i < noPokemons; i++) {
        pokemonHp.push(pokemons[i].base.HP)
    }


    function display() {
        for (var i = 0; i < noPokemons; i++) {
            var div = document.createElement("div")
            div.className = 'col-4 card md-2 mb-2 ';
            div.style.width  = "18rem";
            var img = document.createElement('img')
            img.className = 'card-img-top'
            img.style.width = '10rem'
            img.setAttribute('src', imageneslista[i])
            var cardBody = document.createElement('div')
            cardBody.className = 'card-body'
            var number = document.createElement('h1')
            number.innerHTML = idPokemon[i]
            number.className = 'card-text'
            number.id = 'numberID'
            var name = document.createElement('h2')
            name.innerHTML = pokemonName[i]
            name.className = 'card-text'
            var type = document.createElement('h4')
            type.innerHTML = 'Type: ' + pokemonType[i]
            type.className = 'card-text'
            var hp = document.createElement('h4')
            hp.innerHTML = 'HP: ' + pokemonHp[i]
            hp.className = 'card-text'
            todos.appendChild(div)
            div.appendChild(img)
            div.appendChild(cardBody)
            cardBody.appendChild(number)
            cardBody.appendChild(name)
            cardBody.appendChild(type)
            cardBody.appendChild(hp)
        }
    }
    display();

    var modalPokemon = document.getElementById(modalPokemon)

})();



