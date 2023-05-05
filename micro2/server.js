const express = require('express')
const mysql2 = require('mysql2')
const myconn = require('express-myconnection')

const routes = require('./routes')
const SERVER = "micro2"

const app = express()
app.set('port', process.env.PORT || 4000)

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin123',
    database: 'movies'
}

//middlewares
app.use(myconn(mysql2, dbOptions, 'single'))
app.use(express.json())

//rutas 
app.get('/', (req,res)=>{
    res.send('bienvenido')
})
app.get(`/${SERVER}/nombre`, (req, res)=>{
    res.send("Adrian Alvarado Alfaro")
})

app.get(`/${SERVER}/carne`, (req, res)=>{
    res.send("201700308")
})

app.use(`/${SERVER}`, routes)

//servidor corriendo
app.listen(app.get('port'), ()=>{
    console.log('servidor corriendo en puerto', app.get('port'))
})
