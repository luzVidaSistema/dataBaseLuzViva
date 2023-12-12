const cors = require('cors')
const path = require('path');
const express = require('express');
const app = express();
const wsServer = require('express-ws')(app); 
const router = require('./routes/routes.js');
const {LocalStorage} = require("node-localstorage");
const localStorage = new LocalStorage('./localStorage');
const { handleWs } = require("./utilidades/websocket.js")

app.set('port', process.env.PORT || 80);
app.use(express.static(path.join(__dirname,'public')));

app.use(cors())
app.use(express.json()); 
app.use('/', router);
app.ws('/', handleWs);

const server = app.listen(app.get('port'),()=>{ 
  console.log("http://127.0.0.1:"+server.address().port) 
});