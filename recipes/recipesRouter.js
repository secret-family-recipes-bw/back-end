const router = require('express').Router()
const helpers = require('../auth/helpers')

router.get('/', (req, res) => {
    helpers.getRecipes()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ errMessage: err.message })
        })
})

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params
    helpers.getInstructions(id)
        .then(instruction => {
            res.status(200).json(instruction)
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).json({ errMessage: err.message })
        })
})

router.get('/ingredients/:id/recipes', (req, res) => {
    const { id } = req.params

    helpers.getRecipeByIngredient(id)
        .then(result => {
            res.status(200).json(result)
        }).catch(err => {
            console.log(err.message)
            res.status(500).json({ errorMessage: err.message })

        })

})
//gets recipe by ID  && instructions for the recipe
router.get('/:id', (req, res) => {
    const { id } = req.params

    helpers.getRecipebyId(id)
        .then(recipe => {
            helpers.getInstructions(id)
                .then(instructions => {
                    res.status(200).json({ recipe, instructions })
                })
        }).catch(err => {
            console.log(err.message)
            res.status(500).json({ errorMessage: err.message })
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    helpers.deleteRecipe(id)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ errMessage: err.message })
        })
})

router.post('/addrecipe', (req, res) => {
    const newRecipe = req.body
    helpers.addRecipe(newRecipe)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ errMessage: err.message })
        })
})
router.put('/updaterecipe/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body
    helpers.updateRecipe(changes, id)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ errMessage: err.message })
        })
})
router.post('/:id/addingredient/', (req, res) => {
    const { name, quantity } = req.body
    const { id } = req.params
    helpers.addIngredients({ name }, id, quantity)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ errMessage: err.message })
        })
})
module.exports = router