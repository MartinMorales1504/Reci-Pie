const { Router } = require('express');
const recipes = require('./recipes/recipes')
const users = require('./users/users')
const steps = require('./steps/steps')
const router = Router();

// Configurar los routers

router.use('/recipes', recipes);
router.use('/users', users)
router.use('/steps', steps)


module.exports = router;
