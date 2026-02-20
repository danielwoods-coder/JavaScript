const footballTeam = {
    team: "Team A",
    year: 2026,
    headCoach: "Daniel-Woods",
    players: [
        { name: "Player 1", position: "forward", isCaptain: false },
        { name: "Player 2", position: "midfielder", isCaptain: true },
        { name: "Player 3", position: "defender", isCaptain: false },
        { name: "Player 4", position: "goalkeeper", isCaptain: false }
    ]
};
const headCoach = document.getElementById("head-coach");
headCoach.textContent = footballTeam.headCoach;
const team = document.getElementById("team");
team.textContent = footballTeam.team;
const year = document.getElementById("year");
year.textContent = footballTeam.year;

const playersCards = document.getElementById("player-cards");
playersCards.innerHTML = footballTeam.players.map(player => {
    return `
        <div class="player-card">
            <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
            <p>Position: ${player.position}</p>
        </div>`;
}).join("");

const selEl = document.querySelector("select");

selEl.addEventListener("change", () => {
    const selValue = selEl.value;
    const filterPlayer = selValue === "all" ? footballTeam.players : footballTeam.players.filter(({ position }) => position === selValue);
    playersCards.innerHTML = filterPlayer.map(player => {
        return `
        <div class="player-card">
            <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
            <p>Position: ${player.position}</p>
        </div>`;
    }).join("")
})