const express = require('express')
const helmet = require('helmet')
const server = express();
const authRouter = require('../auth/authRouter')
server.use(express.json())
server.use(helmet())

const hMessage = process.env.HGREET || 'api is online'

server.use('/auth', authRouter)
server.get("/", (req, res) => {
    res.status(200).json({ api: `${hMessage}` })
})


module.exports = server