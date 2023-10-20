const tbody = document.querySelector('tbody');

window.onload = () => {
  getTableData();
};

async function getTableData() {
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
          
          if (element.team.name === 'Arsenal Sarandi'){
            const container = document.querySelector('#stats')

            const divPercents = document.querySelector('#percents')
            const percents = document.createElement('div')
            console.log(element)
            percents.style = 'display: flex; justify-content: space-around; flex-direction: row;'
            percents.innerHTML = `
            <div class="rateDiv">
            <p class="rateText">Victorias</p>
            <h3 class="rate">%${Math.round(element.all.win*100/element.all.played)}</h5>
            </div>
            <div class="rateDiv">
              <p class="rateText">Empates</p>
              <h3 class="rate">%${Math.round(element.all.draw*100/element.all.played)}</h5>
            </div>
            <div class="rateDiv">
              <p class="rateText">Derrotas</p>
              <h3 class="rate">%${Math.round(element.all.lose*100/element.all.played)}</h5>
            </div>
            `

            divPercents.appendChild(percents)
            
            const div = document.createElement('div')
            div.innerHTML = `
            <p class="textDiv">Partidos: <span>${element.all.played}</span></p>
            <p class="textDiv">Ganados: <span>${element.all.win}</span></p>
            <p class="textDiv">Empatados: <span>${element.all.draw}</span></p>
            <p class="textDiv">Perdidos: <span>${element.all.lose}</span></p>
            `

            const div2 = document.createElement('div')
            div2.innerHTML = `
            <p class="textDiv">Goles metidos: <span>${element.all.goals.for}</span></p>
            <p class="textDiv">Goles recibidos: <span>${element.all.goals.against}</span></p>
            <p class="textDiv">Diferencia de goles: <span>${element.goalsDiff}</span></p>
            <p class="textDiv">Puntos: <span>${element.points}</span></p>
            `

            container.appendChild(div)
            container.appendChild(div2)         
          }
        });
    })
    .catch(err => {
      console.log(err);
    });
}