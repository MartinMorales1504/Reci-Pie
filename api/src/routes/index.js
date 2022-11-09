const { Router } = require('express');
const axios = require('axios')
// const API_KEY = process.env.API_KEY
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const API_KEY = 'c3156f4fb99744ec932f43f5be2839ea'
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/test', async (req, res) => {
    const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=false&number=1`)
    // const recInfo = recipies.data
    try {
        const info = await apiUrl.data.results
        res.send(info)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = router;
