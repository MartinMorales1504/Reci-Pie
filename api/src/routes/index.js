const { Router } = require('express');
const recipes = require('./recipes/recipes')


const router = Router();

// Configurar los routers

router.use('/recipes', recipes);



module.exports = router;
