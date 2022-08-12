var express = require('express');
const cors = require('cors');
var app = express();
var morgan = require('morgan')
app.use(morgan('combined'))

//encriptation
var fs = require('fs');
var bodyParser = require('body-parser');

//middleware
var corsOptions = { origin: true, optionsSuccessStatus: 200 };
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '20mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))

//set headers enable
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS');
  next();
});

app.post('/', (req, res) => {
    console.log(req.body)
    suma = req.body.num1 - req.body.num2
    res.send('Resta ' + suma)
})
app.listen(3000, () => console.log('Server 1 online, Esperando peticiones'));