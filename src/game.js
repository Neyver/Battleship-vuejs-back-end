const GameBD = []
const idHelper = require('./IdHelper.js')
const BD = require('.././server/ModelTable.js')

class Game {
	constructor({cols = 10, rows = 10} = {}){
		this.cols = cols;
		this.rows = rows;
	}
	static create({cols = 10, rows = 10} = {}) {
		const game = new Game({cols,rows});
		game.id = GameBD.length + 1;
		game.playerId = idHelper();
		const token = idHelper();
		game.token = token
		GameBD.push(game);
		game.session = `http://localhost:3000/game?token=${token}`;
		BD.sync()
		  .then(() => BD.create({
		    gameId: game.id,
		    session: game.session,
		    token: game.token
		  }))
		  .then(game => {
              console.log(JSON.stringify(game));
		  });
		return Promise.resolve({
			id : game.id, 
			session : game.session,
			playerId : game.playerId
		})
	}

	static join(token) {
		const game = GameBD.find(game => game.token === token);
		if(game === undefined) {
			return Promise.reject()		
		}
		return Promise.resolve({
			id : game.id,
			playerId : idHelper()
		});
	}
}

module.exports = Game