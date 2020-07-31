const request = require('supertest')
const db = require('../data/connection')
const server = require('../api/server')


describe('testing server tests', () => {
    it('runs tests', () => {
        expect(true).toBe(true)
    })

    // it('should respond with status 200', () => {
    //     return request(server).get('/')
    //         .then(res => {
    //             expect(res.status).toBe(200)
    //         })
    // })
    // it('should respond with JSON type, and API message', () => {
    //     return request(server).get('/')
    //         .then(res => {
    //             expect(res.type).toMatch(/json/i);
    //             expect(res.body.api).toBe("api is online");
    //         })
    // })
})

