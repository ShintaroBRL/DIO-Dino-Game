//System requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const mongoose = require('mongoose');

//Configs
const DBServer = process.env.DBServer || 'mongodb+srv://dinogame:diogame@cluster0.mmsah.mongodb.net/dino_game_score?retryWrites=true&w=majority'
const port = process.env.PORT || 5000

//MiddleWares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//RTS
const SocketManager = require("./includes/socketManager")(io);

//Routes
const indexRoute = require("./routes/indexRoute")(app)

//Sartup
mongoose.connect(DBServer);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("[Mongosse] MongoDB Conectado!");
    server.listen(port, () =>{
        console.log("[Server] Server iniciado!");
    })
});
