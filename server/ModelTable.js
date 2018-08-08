let Sequelize = require('sequelize');
let sequelize = require('./Configuration');
/*let sequelize = new Sequelize('Blattle', 'sa', 'yoyoyo123A', {
		host: 'localhost',
		dialect: 'mssql',
		pool: {
			max: 5,
			min: 0,
	    acquire: 30000,
	    idle: 10000
		},
        storage: './data.mssql',
        operatorsAliases: false
	});*/


let Gamedb = sequelize.define('Game', {
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

module.exports = Gamedb;