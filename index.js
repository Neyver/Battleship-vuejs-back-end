const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Game = require('./src/game.js')

const sequelize = require('./server/Configuration')
sequelize
    .authenticate()
    .then(() => {
        console.log('successfully.');
    })
    .catch(err => {
        console.error('error in the connection:', err);
    });

app.get('/game',(req, res) => {
  Game.join(req.query.token)
  .then(game => {
      res.send(game)
    })
  .catch(error => console.error(error))
})

app.post('/game', (req, res,next) => {
  Game.create(req.body)
    .then(game => {
      res.send(game)
    })
    .catch(error => console.error(error))
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

