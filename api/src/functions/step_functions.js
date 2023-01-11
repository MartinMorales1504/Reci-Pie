const axios = require("axios");
const { Op } = require("sequelize");

const {
  Recipe,
  Diet,
  Cuisine,
  DishType,
  Ocassion,
  Step,
  Ingredient,
  Equipment,
} = require("../db");



// CREATE STEP (We need to create the steps first so we can include them to the recipe properly)
// steps = [{
//   instructions1: 'instructions', 
//   equipments: [equipment1, equipment2], 
//   ingredients: [ingredient1, ingredient2]},
//   ...]
// Each ingredient/equipment must be its ID
const createStep = async (instructions, number, ingredients, equipments) => {
      const newStep = await Step.create({
        instructions: instructions,
        number: number,
      })
      if(ingredients){
        ingredients.forEach(async (eachIngredient) => {
          try {
            await newStep.addIngredient(eachIngredient);
          } catch (error) {
             console.log(error)        
          }
        });
      }
      if(equipments) {
        equipments.forEach(async (eachEquipment) => {
          try {
            await newStep.addEquipment(eachEquipment);
          } catch (error) {
            console.log('equipment', eachEquipment)
          }
        });
      }

      return `Step with id ${newStep.id} created successfully`
}

module.exports = {
    createStep,
}