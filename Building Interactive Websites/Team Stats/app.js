const team = {
  _players: [
    {
      firstName: 'Jake',
      lastName: 'Welch',
      age: 20
    },
    {
      firstName: 'Nick',
      lastName: 'Swartz',
      age: 21
    },
    {
      firstName: 'Sevi',
      lastName: 'Garza',
      age: 21
    }
  ],
  _games: [
    {
      opponent: 'Chippewa',
      teamPoints: 37,
      opponentPoints: 21
    },
    {
      opponent: 'Norwayne',
      teamPoints: 20,
      opponentPoints: 79
    },
    {
      opponent: 'Smithville',
      teamPoints: 18,
      opponentPoints: 17
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge
    }
    this._players.push(player);
  },
  addGame(Newopponent, NewteamPoints, NewopponentPoints) {
    let game = {
      opponent: Newopponent,
      teamPoints: NewteamPoints,
      opponentPoints: NewopponentPoints
    }
    this._games.push(game);
  }
}

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Titans', 100, 98);
console.log(team.games);
