const request = require('supertest')
const db = require('../../data/connection')
const server = require('../../api/server')
const recipes = require('../../recipes/recipesRouter')
const bcryptjs = require('bcryptjs')
const users = require('../../auth/authRouter')
const { set } = require('../../api/server')


describe('Recipes End to End Testing', () => {
    let token = ''
    let header = ''
    beforeEach(() => {
        return request(server).post('/auth/login')
            .send({ username: 'test1', password: 'lol123' })
            .then(res => {
                token = res.body.token
                header = { Authorization: token }
                const recipe1 = { user_id: 1, title: 'test pie', source: 'testsrc', category: 'zesty', image: 'testimg.png' }
                const recipe2 = { user_id: 2, title: 'test sandwich', source: 'testsrc', category: 'zesty', image: 'testimg.png' }
                const instructions1 = { recipe_id: 1, step_number: 1, step: 'test step' }
                const ingredients1 = { name: 'test ingredient' }
                const recipeService = { recipe_id: 1, ingredients_id: 1, quantity: 3 }
                return db('Recipes').truncate()
                    .then(() => {
                        return db('Recipes').insert([recipe1, recipe2])
                            .then(() => {
                                return db('Instructions').truncate()
                                    .then(() => {
                                        return db('Instructions').insert([instructions1])
                                            .then(() => {
                                                return db('Ingredients').truncate()
                                                    .then(() => {
                                                        return db('Ingredients').insert([ingredients1])
                                                            .then(() => {
                                                                return db('RecipeServices').truncate()
                                                                    .then(() => {
                                                                        return db('RecipeServices').insert([recipeService])
                                                                    })
                                                            })
                                                    })
                                            })
                                    })
                            })
                    })
            })
    })

    //GET	/recipes	returns a list of recipes.
    describe('GET Recipes', () => {
        it('Returns res status 200 & responds with a JSON Type', () => {
            return request(server).get('/recipes')
                .set(header)
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i);
                })

        })
        it('should return an array with 2 recipe objects', () => {
            return request(server).get('/recipes')
                .set(header)
                .then(res => {
                    expect(res.body).toHaveLength(2)
                })
        })
    })
    //GET	/recipes/:id	returns a recipe by the given ID + instructions
    describe('GET Recipes by id', () => {
        it('should res status 200 & responds with a JSON Type', () => {
            return request(server).get('/recipes/1')
                .set(header)
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i);
                })
        })

        it('should return 1 recipe back', () => {
            return request(server).get('/recipes/1')
                .set(header)
                .then(res => {
                    //had to deconstructure 
                    const { instructions, recipe } = res.body
                    // console.log(recipe)
                    expect([recipe]).toHaveLength(1)
                })

        })
    })
    /* GET	/recipes/:id/instructions	
     returns a list of instructions for a specific recipe */
    describe('GET Instructions by id', () => {
        it('should res status 200 & responds with a JSON Type', () => {
            return request(server).get('/recipes/1/instructions')
                .set(header)
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i);
                })
        })

        it('should return an array of 1 set of instructions for recipe with id 1', () => {
            return request(server).get('/recipes/1/instructions')
                .set(header)
                .then(res => {
                    expect(res.body).toHaveLength(1)
                })
        })
    })
    /*	GET /recipes/ingredients/:id/	
   returns the ingredient ID, Ingredient name, 
   and the recipe information of which that ingredient is used in. */

    describe('GET Ingredient by id', () => {
        it('should res status 200 & responds with a JSON Type', () => {
            return request(server).get('/recipes/ingredients/1')
                .set(header)
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i);
                })
        })

        it('should return an array with 1 object which is the ingredient by id and recipe info assosiated with it', () => {
            return request(server).get('/recipes/ingredients/1')
                .set(header)
                .then(res => {
                    expect(res.status).toBe(200)
                    // console.log(res.body)
                    expect(res.body[0].title).toBe('test pie')
                })
        })
    })
    //POST	/recipes/addrecipe	Adds a new Recipe.
    describe('POST', () => {
        it('should res status 200 & responds with a JSON Type', () => {
            return request(server).post('/recipes/addrecipe')
                .set(header)
                .send({
                    user_id: "3",
                    title: "test recipe updated",
                    source: "testingsource",
                    category: "lunch"
                })
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i);
                })
        })

        it('should return updated recipe', () => {
            return request(server).post('/recipes/addrecipe')
                .set(header)
                .send({
                    user_id: "3",
                    title: "test recipe updated",
                    source: "testingsource",
                    category: "lunch"
                })
                .then(res => {
                    // console.log(res.body)
                    expect(res.body.title).toBe("test recipe updated")
                })
        })
    })

    // POST	/recipes/:id/addingredient/	Adds an ingredient to a Recipe with the quantity amount for a specific recipe.id.
    describe('POST', () => {
        it('should res status 200 & responds with a JSON Type', () => {
            return request(server).post('/recipes/1/addingredient')
                .set(header)
                .send({
                    name: "testfruit12",
                    recipe_id: "1",
                    ingredients_id: "1",
                    quantity: "3"
                })
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i);
                })
        })

        it('should return added ingredients name from the response', () => {
            return request(server).post('/recipes/1/addingredient')
                .set(header)
                .send({
                    name: "testfruit123",
                    recipe_id: "1",
                    ingredients_id: "1",
                    quantity: "3"
                })
                .then(res => {
                    // console.log(res.body)
                    expect(res.body.name).toBe("testfruit123")
                })
        })
    })
    // PUT	/recipes/updaterecipe/:id	Update an existing recipe by the recipe ID.
    describe('PUT', () => {
        it('should res status 200 & responds with a JSON Type', () => {
            return request(server).put('/recipes/updaterecipe/1')
                .set(header)
                .send({
                    user_id: "3",
                    title: "test recipe updateed",
                    source: "testingsource",
                    category: "lunch"
                })
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i);
                })
        })

        it('should return updated recipe', () => {
            return request(server).put('/recipes/updaterecipe/1')
                .set(header)
                .send({
                    user_id: "3",
                    title: "test recipe updateed",
                    source: "testingsource",
                    category: "lunch"
                })
                .then(res => {
                    // console.log(res.body)
                    expect(res.body.category).toBe("lunch")
                })
        })
    })

    //DELETE	/recipes/:id	Deletes an existing recipe by the recipe ID.
    describe('DELETE', () => {
        it('should res status 200 & responds with a JSON Type', () => {
            return request(server).delete('/recipes/1')
                .set(header)
                .then(res => {
                    expect(res.status).toBe(200)
                    expect(res.type).toMatch(/json/i);
                })
        })

        it('should return count of deleted users as 1', () => {
            return request(server).delete('/recipes/1')
                .set(header)
                .then(res => {
                    // console.log(res.body)
                    expect(res.body).toStrictEqual(1);
                })
        })
    })
})