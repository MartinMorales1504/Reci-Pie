const axios = require('axios')
const API_KEY = process.env.API_KEY

const getFood = async () => {
    const apiInfo = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=false&number=1`)
}