"use strict";

var teamName = document.getElementById("team");
var typeOfSport = document.getElementById("sport");
var worldCupYear = document.getElementById("year");
var headCoach = document.getElementById("head-coach");
var playerCards = document.getElementById("player-cards");
var playersDropdownList = document.getElementById("players");
var myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Football",
  year: 1986,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7
  },
  players: [{
    name: "Sergio Almirón",
    position: "forward",
    number: 1,
    isCaptain: false,
    nickname: null
  }, {
    name: "Sergio Batista",
    position: "midfielder",
    number: 2,
    isCaptain: false,
    nickname: null
  }, {
    name: "Ricardo Bochini",
    position: "midfielder",
    number: 3,
    isCaptain: false,
    nickname: "El Bocha"
  }, {
    name: "Claudio Borghi",
    position: "midfielder",
    number: 4,
    isCaptain: false,
    nickname: "Bichi"
  }, {
    name: "José Luis Brown",
    position: "defender",
    number: 5,
    isCaptain: false,
    nickname: "Tata"
  }, {
    name: "Daniel Passarella",
    position: "defender",
    number: 6,
    isCaptain: false,
    nickname: "El Gran Capitán"
  }, {
    name: "Jorge Burruchaga",
    position: "forward",
    number: 7,
    isCaptain: false,
    nickname: "Burru"
  }, {
    name: "Néstor Clausen",
    position: "defender",
    number: 8,
    isCaptain: false,
    nickname: null
  }, {
    name: "José Luis Cuciuffo",
    position: "defender",
    number: 9,
    isCaptain: false,
    nickname: "El Cuchu"
  }, {
    name: "Diego Maradona",
    position: "midfielder",
    number: 10,
    isCaptain: true,
    nickname: "El Pibe de Oro"
  }, {
    name: "Jorge Valdano",
    position: "forward",
    number: 11,
    isCaptain: false,
    nickname: "The Philosopher of Football"
  }, {
    name: "Héctor Enrique",
    position: "midfielder",
    number: 12,
    isCaptain: false,
    nickname: null
  }, {
    name: "Oscar Garré",
    position: "defender",
    number: 13,
    isCaptain: false,
    nickname: null
  }, {
    name: "Ricardo Giusti",
    position: "midfielder",
    number: 14,
    isCaptain: false,
    nickname: null
  }, {
    name: "Luis Islas",
    position: "goalkeeper",
    number: 15,
    isCaptain: false,
    nickname: "El loco"
  }, {
    name: "Julio Olarticoechea",
    position: "defender",
    number: 16,
    isCaptain: false,
    nickname: null
  }, {
    name: "Pedro Pasculli",
    position: "forward",
    number: 17,
    isCaptain: false,
    nickname: null
  }, {
    name: "Nery Pumpido",
    position: "goalkeeper",
    number: 18,
    isCaptain: false,
    nickname: null
  }, {
    name: "Oscar Ruggeri",
    position: "defender",
    number: 19,
    isCaptain: false,
    nickname: "El Cabezón"
  }, {
    name: "Carlos Tapia",
    position: "midfielder",
    number: 20,
    isCaptain: false,
    nickname: null
  }, {
    name: "Marcelo Trobbiani",
    position: "midfielder",
    number: 21,
    isCaptain: false,
    nickname: "Calesita"
  }, {
    name: "Héctor Zelada",
    position: "goalkeeper",
    number: 22,
    isCaptain: false,
    nickname: null
  }]
};
Object.freeze(myFavoriteFootballTeam);
var sport = myFavoriteFootballTeam.sport,
    team = myFavoriteFootballTeam.team,
    year = myFavoriteFootballTeam.year,
    players = myFavoriteFootballTeam.players;
var coachName = myFavoriteFootballTeam.headCoach.coachName;
typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

var setPlayerCards = function setPlayerCards() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : players;
  playerCards.innerHTML += arr.map(function (_ref) {
    var name = _ref.name,
        position = _ref.position,
        number = _ref.number,
        isCaptain = _ref.isCaptain,
        nickname = _ref.nickname;
    return "\n        <div class=\"player-card\">\n          <h2>".concat(name, " ").concat(isCaptain ? "(Captain)" : "", "</h2>\n          <p>Position: ").concat(position, "</p>\n          <p>Number: ").concat(number, "</p>\n          <p>Nickname: ").concat(nickname !== null ? nickname : "N/A", "</p>\n        </div>\n      ");
  }).join("");
};

playersDropdownList.addEventListener("change", function (e) {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter(function (player) {
        return player.nickname !== null;
      }));
      break;

    case "forward":
      setPlayerCards(players.filter(function (player) {
        return player.position === "forward";
      }));
      break;

    case "midfielder":
      setPlayerCards(players.filter(function (player) {
        return player.position === "midfielder";
      }));
      break;

    case "defender":
      setPlayerCards(players.filter(function (player) {
        return player.position === "defender";
      }));
      break;

    case "goalkeeper":
      setPlayerCards(players.filter(function (player) {
        return player.position === "goalkeeper";
      }));
      break;

    default:
      setPlayerCards();
      break;
  }
});