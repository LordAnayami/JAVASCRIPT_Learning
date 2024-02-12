const proxy = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const input = document.getElementById("search-input");
const button = document.getElementById("search-button");
const pokeName = document.getElementById("pokemon-name");
const pokeID = document.getElementById("pokemon-id");
const pokeWeight = document.getElementById("weight");
const pokeHeight = document.getElementById("height");
const pokeTypes = document.getElementById("types");
const pokeHP = document.getElementById("hp");
const pokeAttack = document.getElementById("attack");
const pokeDefense = document.getElementById("defense");
const pokeSA = document.getElementById("special-attack");
const pokeSD = document.getElementById("special-defense");
const pokeSpeed = document.getElementById("speed");
const pokeImage = document.getElementById("div-image");


const getPokemonData = async (pokemonName) => {
    try {
      let url;
      if (!isNaN(pokemonName)) { // Check if input is a number (ID)
        url = `${proxy}/${pokemonName}`;
      } else { // Assume input is a string (name)
        url = `${proxy}/${pokemonName.toLowerCase()}`;
      }
  
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  };
  
  const showPokemon = async (event) => {
    event.preventDefault();
        
    const pokemonName = input.value;
    if (!pokemonName) {
      alert("Pokémon not found");
      return;
    }
  
    const pokemonData = await getPokemonData(pokemonName);
    if (pokemonData) {
      const { name, id, weight, height, types, stats, sprites } = pokemonData;
      const hp = stats.find(stat => stat.stat.name === 'hp').base_stat;
      const attack = stats.find(stat => stat.stat.name === 'attack').base_stat;
      const defense = stats.find(stat => stat.stat.name === 'defense').base_stat;
      const specialAttack = stats.find(stat => stat.stat.name === 'special-attack').base_stat;
      const specialDefense = stats.find(stat => stat.stat.name === 'special-defense').base_stat;
      const speed = stats.find(stat => stat.stat.name === 'speed').base_stat;
        
      pokeName.innerText = name.toUpperCase();
      pokeID.innerText = id;
      pokeWeight.innerText = weight;
      pokeHeight.innerText = height;

      pokeTypes.innerHTML = ''; // Clear previous content

      types.forEach(type => {
        const typeElement = document.createElement('p');
        typeElement.textContent = type.type.name.toUpperCase();
        pokeTypes.appendChild(typeElement);
      });

      pokeHP.innerText = hp;
      pokeAttack.innerText = attack;
      pokeDefense.innerText = defense;
      pokeSA.innerText = specialAttack;
      pokeSD.innerText = specialDefense;
      pokeSpeed.innerText = speed;

      pokeImage.innerHTML = "";
      const image = document.createElement('img');
        image.src = sprites.front_default;
        image.alt = "Pokemon Sprite";
        image.id = "sprite"
        image.width = "200"

        pokeImage.appendChild(image);
  
    } else {
      alert('Pokémon not found');
    }
  };

  button.addEventListener('click', showPokemon);