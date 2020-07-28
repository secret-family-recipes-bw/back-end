const db = require('../data/connection')

module.exports = {
    get,
    register,
    login,
    findUserById,
}
function get() {
    return db('users')
        .select('users.username', 'users.name')
}

function login(username) {
    return db('users')
    .where(username)
    .select('users.id', 'users.username', 'users.password')
    .orderBy('users.id')
}

function register(user) {
    return db('users')
        .insert(user, 'id')
        .then(([id]) => {
            return findUserById(id)
        })
}
function findUserById(id) {
return db('users')
.where({id})
.first()
.select('users.id', 'users.username', 'users.email', 'users.name')
}