const footballTeam = {
  team: "Paris Saint-Germain",
  year: 2025,
  headCoach: "Luis Enrique",
  players: [
    {
      name: "Hakimi",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Marquinhos",
      position: "defender",
      isCaptain: true,
    },
    {
      name: "Zabarnyl",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Kvaratskhelia",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Ruiz",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Ramos",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Dembélé",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Doué",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Vitinha",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Lee",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Hernández",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Mendes",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Dro Fernández",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Barcola",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Chevalier",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Zaire-emery",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Beraldo",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Safonov",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Mayulu",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Ndjantou",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Mbaye",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Pacho",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Neves",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Marin",
      position: "goalkeeper",
      isCaptain: false,
    },
  ],
};

const headCoachSpanEl = document.getElementById("head-coach");
const teamSpanEl = document.getElementById("team");
const yearSpanEl = document.getElementById("year");
const playerCardsDivEl = document.getElementById("player-cards");
const playersSelectEl = document.getElementById("players");

headCoachSpanEl.innerText = footballTeam.headCoach;
teamSpanEl.innerText = footballTeam.team;
yearSpanEl.innerText = footballTeam.year;

function turnPlayersArrToHTMLDivs(players) {
  return players
    .map(
      (player) =>
        `<div class="player-card"><h2>${player.name} ${player.isCaptain ? "(Captain)" : ""}</h2><p>Position: ${player.position}</p></div>`,
    )
    .join("");
}

function filterPlayers(playerPosition) {
  return playerPosition === "all"
    ? footballTeam.players
    : footballTeam.players.filter(
        ({ position }) => position === playerPosition,
      );
}

playerCardsDivEl.innerHTML = turnPlayersArrToHTMLDivs(footballTeam.players);

playersSelectEl.addEventListener("change", (e) => {
  playerCardsDivEl.innerHTML = turnPlayersArrToHTMLDivs(
    filterPlayers(e.target.value),
  );
});
