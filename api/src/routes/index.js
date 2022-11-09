const { Router } = require('express');
const axios = require('axios')
const functions = require('../functions/food_functions')

const API_KEY = 'c3156f4fb99744ec932f43f5be2839ea'
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/test', async (req, res) => {
    try {
        const info = await functions.getFood()
        res.send(info)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = router;
