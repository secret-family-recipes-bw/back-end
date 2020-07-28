const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = require('express').Router()
const helpers = require('./helpers')


function makeJwt(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }

    const secret = process.env.JWT_SECRET || "is it secret, is it safe?";

    const options = {
        expiresIn: "1h",
    }

    return jwt.sign(payload, secret, options);
}

router.get('/users', (req, res) => {
    helpers.get()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({errMessage: err})
    })
})

router.post('/register', (req, res) => {
    const credentials = req.body
    if(credentials) {
    // console.log(credentials)
        const rounds = +process.env.BCRYPT_ROUNDS || 8;
        //hashing and slashing the password
        const hash = bcryptjs.hashSync(credentials.password, rounds)
        credentials.password = hash
        //save the user to the DB
        helpers.register(credentials)
            .then(user => {
                const token = makeJwt(user)
                res.status(200).json({user,token})
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ errMessage: err.message })
            })
    } else {
        res.status(400).json({
            errMessage:
                'please provide username and password - the password shoud be alphanumeric'
        })
    }
})

router.post('/login', (req, res) => {
    const { username, password} = req.body
    if(req.body) {
        helpers.login({username: username})
        .then(([user]) => {
        // compare the password the hash stored in the database
        if(user && bcryptjs.compareSync(password, user.password)){
            const token = makeJwt(user)
            res.status(200).json({ message: "Welcome to our API", token });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }})
        .catch(error => {
            res.status(500).json({ message: error.message });
        })
    } else {
        res.status(400).json({message: "please provide username and password and the password shoud be alphanumeric"})
    }
})

module.exports = router