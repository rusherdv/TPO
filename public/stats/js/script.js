const tbody = document.querySelector('tbody')

async function getTeamData() {
  await fetch("https://v3.football.api-sports.io/standings?league=128&season=2023", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "0212911083689fd2a01173883f35d27d"
    }
  })
    .then(response => response.json())
    .then((data) => {
        data.response[0].league.standings[0].forEach(element => {
          console.log('Equipo: ', element.team.name)
          console.log('Logo equipo: ', element.team.logo)
          console.log('Elemento: ', element)
          const tr = document.createElement('tr')
          tr.innerHTML = `
          <td>
            <div class="team">
              <p class="position">${element.rank}</p>
              <img src=${element.team.logo} class="teamIcon" width="30" height="30" alt="">
              <p class="teamName">${element.team.name}</p>
            </div>
          </td>
          <td>${element.all.played}</td>
          <td>${element.all.win}</td>
          <td>${element.all.draw}</td>
          <td>${element.all.lose}</td>
          <td>${element.all.goals.for}</td>
          <td>${element.all.goals.against}</td>
          <td>${element.goalsDiff}</td>
          <td>${element.points}</td>
          `
          
          tbody.appendChild(tr)
        });
    })
    .catch(err => {
      console.log(err);
    });
}