const playerCardDiv = document.querySelector('.playerCardDiv');

window.onload = () => {
  getPlayersData();
};

async function getPlayersData() {
  await fetch("https://v3.football.api-sports.io/players/squads?team=459", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "0212911083689fd2a01173883f35d27d"
    }
  })
    .then(response => {
      response.json().then(data => {
        data.response[0].players.forEach(player => {
          const div = document.createElement('div')
          div.classList.add('playerCard')
          div.innerHTML = `
            <div class="playerLeft">
            <img class="playerImage" src=${player.photo} onerror="this.onerror=null;this.src='inicio/img/error_img_plyr.png';" alt="Imagen de jugador">
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
      }
      )
    })
    .catch(err => {
      console.log(err);
    });
}

document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  const slideTrack = document.querySelector(".slide-track");

  // Clonar los primeros slides y agregarlos al final del slider
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => {
      const clone = slide.cloneNode(true);
      slideTrack.appendChild(clone);
  });
});


