const express = require('express')
const helmet = require('helmet')
require('dotenv').config();
const server = express()

server.use(express.json())
server.use(helmet())

const hMessage = process.env.HGREET || 'api is online'

server.get("/", (req, res) => {
    res.status(200).json({ api: `${hMessage}` })
})


module.exports = server