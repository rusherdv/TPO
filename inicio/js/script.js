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
      console.log(data)
    })
    .catch(err => {
      console.log(err);
    });
}

