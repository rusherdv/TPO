const playerCardDiv = document.querySelector('.playerCardDiv')

async function getTeamData(){
    await fetch("https://v3.football.api-sports.io/teams?id=459", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "0212911083689fd2a01173883f35d27d"
      }
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    })
    .catch(err => {
      console.log(err);
    });
}

async function getPlayersData(){
    await fetch("https://v3.football.api-sports.io/players/squads?team=459", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "0212911083689fd2a01173883f35d27d"
      }
    })
    .then(response => response.json())
    .then((data) => {
      data.response[0].players.forEach( player => {
        const div = document.createElement('div')
        div.classList.add('playerCard')
        div.innerHTML = `
        <div class="playerLeft">
        <img class="playerImage" src=${player.photo} alt="Imagen de jugador">
        </div>
        <div class="playerRight">
            <p class="playerName">${player.name}</p>
            <p class="playerNum">Numero: <span>${player.number === null ? "Desconocido" : player.number}</span></p>
            <p class="playerAge">Edad: <span>${player.age}</span></p>
            <p class="playerPosition">Posicion: <span>${player.position === 'Goalkeeper' ? 'Arquero' : player.position === 'Defender' ? 'Defensor' : player.position === 'Midfielder' ? 'Mediocentro' : player.position === 'Attacker' ? 'Delantero' : player.position}</span></p>
        </div>
        `
        playerCardDiv.appendChild(div)
      })
      console.log(data.response[0].players)
    })
    .catch(err => {
      console.log(err);
    });
}

async function getNews(){
  await fetch("https://newsapi.org/v2/everything?q=afa&apiKey=12c7fdb8e00a4a55a9e81b85d44df9ae", {
    "method": "GET"
  })
  .then(response => response.json())
  .then((data) => {
    console.log(data)
  })
  .catch(err => {
    console.log(err);
  });
}
