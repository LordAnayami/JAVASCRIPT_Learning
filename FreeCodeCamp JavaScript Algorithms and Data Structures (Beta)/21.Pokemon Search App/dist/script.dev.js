"use strict";

var proxy = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
var input = document.getElementById("search-input");
var button = document.getElementById("search-button");
var pokeName = document.getElementById("pokemon-name");
var pokeID = document.getElementById("pokemon-id");
var pokeWeight = document.getElementById("weight");
var pokeHeight = document.getElementById("height");
var pokeTypes = document.getElementById("types");
var pokeHP = document.getElementById("hp");
var pokeAttack = document.getElementById("attack");
var pokeDefense = document.getElementById("defense");
var pokeSA = document.getElementById("special-attack");
var pokeSD = document.getElementById("special-defense");
var pokeSpeed = document.getElementById("speed");
var pokeImage = document.getElementById("div-image");

var getPokemonData = function getPokemonData(pokemonName) {
  var url, response, data;
  return regeneratorRuntime.async(function getPokemonData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          if (!isNaN(pokemonName)) {
            // Check if input is a number (ID)
            url = "".concat(proxy, "/").concat(pokemonName);
          } else {
            // Assume input is a string (name)
            url = "".concat(proxy, "/").concat(pokemonName.toLowerCase());
          }

          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(url));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

var showPokemon = function showPokemon(event) {
  var pokemonName, pokemonData, name, id, weight, height, types, stats, sprites, hp, attack, defense, specialAttack, specialDefense, speed, image;
  return regeneratorRuntime.async(function showPokemon$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          event.preventDefault();
          pokemonName = input.value;

          if (pokemonName) {
            _context2.next = 5;
            break;
          }

          alert("Pokémon not found");
          return _context2.abrupt("return");

        case 5:
          _context2.next = 7;
          return regeneratorRuntime.awrap(getPokemonData(pokemonName));

        case 7:
          pokemonData = _context2.sent;

          if (pokemonData) {
            name = pokemonData.name, id = pokemonData.id, weight = pokemonData.weight, height = pokemonData.height, types = pokemonData.types, stats = pokemonData.stats, sprites = pokemonData.sprites;
            hp = stats.find(function (stat) {
              return stat.stat.name === 'hp';
            }).base_stat;
            attack = stats.find(function (stat) {
              return stat.stat.name === 'attack';
            }).base_stat;
            defense = stats.find(function (stat) {
              return stat.stat.name === 'defense';
            }).base_stat;
            specialAttack = stats.find(function (stat) {
              return stat.stat.name === 'special-attack';
            }).base_stat;
            specialDefense = stats.find(function (stat) {
              return stat.stat.name === 'special-defense';
            }).base_stat;
            speed = stats.find(function (stat) {
              return stat.stat.name === 'speed';
            }).base_stat;
            pokeName.innerText = name.toUpperCase();
            pokeID.innerText = id;
            pokeWeight.innerText = weight;
            pokeHeight.innerText = height;
            pokeTypes.innerHTML = ''; // Clear previous content

            types.forEach(function (type) {
              var typeElement = document.createElement('p');
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
            image = document.createElement('img');
            image.src = sprites.front_default;
            image.alt = "Pokemon Sprite";
            image.id = "sprite";
            image.width = "200";
            pokeImage.appendChild(image);
          } else {
            alert('Pokémon not found');
          }

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
};

button.addEventListener('click', showPokemon);