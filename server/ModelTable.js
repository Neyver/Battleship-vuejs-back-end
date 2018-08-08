let Sequelize = require('sequelize');
let sequelize = require('./Configuration');

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