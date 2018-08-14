const Sequelize = require('sequelize');
const sequelize = require('./Configuration');

const Gamedb = sequelize.define('Game', {
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
    },
    player1: {
        type: Sequelize.STRING,
        field: 'player1'
    },
    player2: {
        type: Sequelize.STRING,
        field: 'player2'
    }
});

Gamedb = sequelize.define('Ships', {
    typeShips: {
        type: Sequelize.INTEGER,
        field: 'type'
    },
    name: {
        type: Sequelize.STRING,
        field: 'name'
    }
    }
});

Gamedb = sequelize.define('Map', {
    row: {
        type: Sequelize.INTEGER,
        field: 'type'
    },
    col: {
        type: Sequelize.STRING,
        field: 'name'
    },
     gameId: {
        type: Sequelize.INTEGER,
        field: 'game_id'
    },
}
});


module.exports = Gamedb;