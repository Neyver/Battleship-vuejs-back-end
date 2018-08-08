var Sequelize  = require('sequelize');
var sequelize = new Sequelize('battleship', 'sa', 'yoyoyo123A', {
		host: 'localhost',
		dialect: 'mssql',
		pool: {
			max: 5,
			min: 0,
	    acquire: 30000,
	    idle: 10000
		},
		storage: './data.mssql'
	});


var Game = sequelize.define('Game', {
    gameId: {
        type: Sequelize.INTEGER,
        field: 'game_id'
    },
    session: {
        type: Sequelize.STRING,
        field: 'session'
    },
    token: {
        type: Sequelize.STRING,
        field: 'token'
    }
});

module.exports = Game;