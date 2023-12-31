const express = require('express')
const path = require('path');
const userRouter = require('./routers/user')
const itemRouter =require('./routers/item')
require('./db/mongoose')
require("dotenv").config();

const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(itemRouter)

const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})
app.listen(port, () => {
    console.log('server listening on port ' + port)
})