const express = require('express')
const helmet = require('helmet')
const server = express();
const authRouter = require('../auth/authRouter')
const recipesRouter = require('../recipes/recipesRouter')
const cors = require('cors')
const authenticate = require('../auth/authenticateMW')

server.use(express.json())
server.use(helmet())


server.use(cors())
const hMessage = process.env.HGREET || 'api is online'
server.use('/recipes', authenticate, recipesRouter)
server.use('/auth', authRouter)
server.get("/", (req, res) => {
    res.status(200).json({ api: `${hMessage}` })
})


module.exports = server