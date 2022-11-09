const axios = require('axios')
const API_KEY = 'c3156f4fb99744ec932f43f5be2839ea'

let apiInfo = []

const getFood = async () => {
    const info = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=false&number=3`)
    apiInfo = info.data.results
    return apiInfo
}


module.exports = {
    getFood
}