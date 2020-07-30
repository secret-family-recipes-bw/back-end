const router = require('express').Router()
const helpers = require('../auth/helpers')
const cloudinary = require('../config/cloudinaryConfig')
const multer = require('../config/mutlerConfig')
const { decodeBase64 } = require('bcryptjs')
const { resolveSoa } = require('dns')

const cloudinaryConfig = cloudinary.cloudinaryConfig
const uploader = cloudinary.uploader
const multerUploads = multer.multerUploads
const Datauri = multer.dataUri

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

router.get('/ingredients/:id', (req, res) => {
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

router.post('/addrecipe/', (req, res) => {
    const {id} = req.params
    const newRecipe = req.body
    helpers.addRecipe(newRecipe, id)
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

// router.put('/:id/image', multerUploads.single('image-raw'), cloudinaryConfig, (req, res) => {
//     const file = dataUri(req)
//     uploader.upload(file.content,
//         { dpr: "auto", responsive: true, width: "auto", crop: "scale" },
//         (error, response) => {
//             req.image = response.secure_url
//             helpers.updateRecipe({image_url: req.image})
//             .then(post => {
//                 res.status(200).json({post})
//             })
//             .catch(err => {
//                 console.log(err)
//                 res.status(500).json({err})
//             })
//         }
//     )
// })


module.exports = router