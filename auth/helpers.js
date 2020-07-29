const db = require('../data/connection')

module.exports = {
    get,
    register,
    login,
    findUserById,
    getRecipes,
    getRecipebyId,
    getInstructions,
    getRecipeByIngredient,
    addRecipe,
    deleteRecipe,
    updateRecipe,
    addIngredients
}
function get() {
    return db('Users')
        .select('Users.username', 'Users.name')
}
function getRecipes() {
    return db('Recipes')
}
function getRecipebyId(id) {
    return db('Recipes')
        .where({ id })
        .first()
    // .then(result => {
    //    return {result, getRecipebyId(id)}
    // }).catch(err => {
    //     console.log(err)
    //     res.status(500).json({ errmessage: err.message })
    // })
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
        .where({ id })
        .first()
        .select('users.id', 'users.username', 'users.email', 'users.name')
}

function getInstructions(id) {
    return db('Instructions')
        .select('Instructions.*', 'Recipes.title')
        .join('Recipes', 'Instructions.recipe_id', 'Recipes.id')
        .where('recipe_id', '=', id)
}

//intermediary use
function getRecipeByIngredient(id) {
    return db('Ingredients')
        .select('Recipes.id as RecipeID', 'Recipes.title', 'Recipes.source', 'Recipes.category', 'Recipes.image', 'Ingredients.name as ingredient', 'Ingredients.id as IngredientID')
        .join('RecipeServices', 'RecipeServices.ingredients_id', 'Ingredients.id')
        .join('Recipes', 'RecipeServices.recipe_id', 'Recipes.id')
        .where('Ingredients.id', '=', id)
}

function addRecipe(newRecipe) {
    return db('recipes')
        .insert(newRecipe, 'id')
        .then(([id]) => {
            return getRecipebyId(id)
        })
}

function deleteRecipe(id) {
    return db('Recipes')
        .where({ id })
        .del()
}

function updateRecipe(changes, id) {
    return db('Recipes')
        .where({ id })
        .update(changes)
        .then(result => {
            return getRecipebyId(id)
        })
}

function addIngredients(newIngredient, recipe_id, quantity) {
    return db('Ingredients')
        .insert(newIngredient, 'id')
        .then(([id]) => {
            return db('RecipeServices')
                .insert({ recipe_id: recipe_id, ingredients_id: id, quantity:quantity })
                .then(() => {
                    return db('ingredients')
                        .where({ id })
                        .first()
                })
        })

}