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
        });
    })
    .catch(err => {
      console.log(err);
    });
}