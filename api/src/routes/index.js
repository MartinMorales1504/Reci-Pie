const { Router } = require('express');
const recipes = require('./recipes/recipes')
const users = require('./users/users')
const steps = require('./steps/steps')
const router = Router();

var cors = require('cors')

router.use(cors()) // Use this after the variable declaration

// Configurar los routers

router.use('/recipes', recipes);
router.use('/users', users)
router.use('/steps', steps)


module.exports = router;
