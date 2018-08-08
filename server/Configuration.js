const Sequelize = require('sequelize'),
    sequelize = new Sequelize('Blattle', 'sa', 'yoyoyo123A', {
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
	});

module.exports = sequelize;