require('dotenv').config()
const { SERVER_PORT, CONNECTION_STRING } = process.env

const express = require('express')
const massive = require('massive')

const Ctrl = require('./Controller.js')

const app = express()

app.use(express.json())

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)

})

app.get('/api/inventory', Ctrl.readInventory)


app.listen(SERVER_PORT, console.log( `Server listening on PORT: ${SERVER_PORT}`))