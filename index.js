const express = require('express');
const app = express();
require('dotenv').config()
const player_controller = require('./controllers/player');
var cors = require('cors')


app.use(cors())

const PORT = process.env.PORT || 9000;
// Set ejs template engine
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.get('/player', player_controller.index);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});