const { Router } = require('express');
const recipes = require('./recipes/recipes')
const users = require('./users/users')

const router = Router();

// Configurar los routers

router.use('/recipes', recipes);
router.use('/users', users)


module.exports = router;
