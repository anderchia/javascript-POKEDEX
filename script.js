const pokeURL = "https://pokeapi.co/api/v2/pokemon";

const gallery$$ = document.querySelector(".gallery");

function getCards(){
    for (let index = 1; index <= 151; index++) {
        buscarPokemon(index)     
    }
}

function buscarPokemon(index){
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then((res) => res.json())
        .then ((resParsedToJSON) => {
            console.log(resParsedToJSON);
            printCards(resParsedToJSON);
        })
}

const printCards =(card) => {
        const figure$$ = document.createElement("figure");
        const title$$ = document.createElement("h2");
        const image$$ = document.createElement("img");
        const type$$ = document.createElement ("p");
        const id$$ = document.createElement ("p");

        figure$$.className="caja";
        id$$.className="numero";
        type$$.className="tipo";

        title$$.textContent = card.name;
        image$$.src = card.sprites.other['official-artwork'].front_default;
        type$$.textContent = card.types.map ((item) => item.type.name); // para coger todos los elementos
        id$$.textContent="Nº "+card.id;
        figure$$.appendChild(title$$);
        figure$$.appendChild(image$$);
        figure$$.appendChild(type$$);
        figure$$.appendChild(id$$);

        gallery$$.appendChild(figure$$);

    }


getCards();