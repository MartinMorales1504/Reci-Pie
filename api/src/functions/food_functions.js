const axios = require("axios");

const { Recipe, Diet, Cuisine, DishType, Ocassion, Step, Ingredient, Equipment } = require("../db");

const API_KEY = "c3156f4fb99744ec932f43f5be2839ea";

// IMPORT API DATA
const getFood = async () => {
  const info = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=5`
  );

  return info.data.results;
};

// CREATE DIETS DATABASE
const initialCreateDiet = (recipes) => {
  let diets = [];

  recipes?.forEach((rec) => {
    rec.diets?.forEach((eachDiet) => {
      if (!diets.includes(eachDiet)) diets.push(eachDiet);
    });
  });

  diets.forEach(async (eachDiet) => {
    const [diet, dietCreated] = await Diet.findOrCreate({
      where: {
        name: eachDiet,
      },
      defaults: {
        name: eachDiet,
      },
    });
  });
  return diets;
};

// CREATE CUISINES DATABASE
const initialCreateCuisines = (recipes) => {
  let cuisines = [];

  recipes?.forEach((rec) => {
    rec.cuisines?.forEach((eachCuisine) => {
      if (!cuisines.includes(eachCuisine)) cuisines.push(eachCuisine);
    });
  });

  cuisines.forEach(async (eachCuisine) => {
    const [cuisine, cuisineCreated] = await Cuisine.findOrCreate({
      where: {
        name: eachCuisine,
      },
      defaults: {
        name: eachCuisine,
      },
    });
  });
  return cuisines;
};

// CREATE DISHTYPES DATABASE
const initialCreateDishTypes = (recipes) => {
  let dishTypes = [];

  recipes?.forEach((rec) => {
    rec.dishTypes?.forEach((eachDishType) => {
      if (!dishTypes.includes(eachDishType)) dishTypes.push(eachDishType);
    });
  });

  dishTypes.forEach(async (eachDishType) => {
    const [dishType, dishTypeCreated] = await DishType.findOrCreate({
      where: {
        name: eachDishType,
      },
      defaults: {
        name: eachDishType,
      },
    });
  });
  return dishTypes;
};

// CREATE OCASSION DATABASE
const initialCreateOcassions = (recipes) => {
  let ocassions = [];

  recipes?.forEach((rec) => {
    rec.ocassions?.forEach((eachOcassion) => {
      if (!ocassions.includes(eachOcassion)) ocassions.push(eachOcassion);
    });
  });

  ocassions.forEach(async (eachOcassion) => {
    const [ocassion, ocassionCreated] = await Ocassion.findOrCreate({
      where: {
        name: eachOcassion,
      },
      defaults: {
        name: eachOcassion,
      },
    });
  });
  return ocassions;
};


// CREATE ALL INITIAL INGREDIENTS
const initialCreateIngredients = (recipes) => {
  let ingredients = [];
  recipes?.forEach((rec) => {
    rec.analyzedInstructions[0]?.steps?.forEach((step) => {
      step?.ingredients?.forEach((eachIngredient) => {
        if(!ingredients.includes(eachIngredient)) ingredients.push(eachIngredient)
      })
    })
  })

  ingredients?.forEach(async (eachIngredient) => {
    const [ingredient, ingredientCreated] = await Ingredient.findOrCreate({
      where: {
        name: eachIngredient.name
      },
      defaults:{
        name: eachIngredient.name
      }
    });
  });
  return ingredients
}


// CREATE ALL INITIAL EQUIPMENT
const initialCreateEquipment = (recipes) => {
  let allEquipment = [];
  recipes?.forEach((rec) => {
    rec?.analyzedInstructions[0]?.steps?.forEach((step) => {
      step.equipment?.forEach((eachEquipment) => {
        if(!allEquipment.includes(eachEquipment)) allEquipment.push(eachEquipment)
      })
    })
  })

  allEquipment.forEach(async (eachEquipment) => {
    const [equipment, equipmentCreated] = await Equipment.findOrCreate({
      where: {
        name: eachEquipment.name
      },
      defaults:{
        name: eachEquipment.name
      }
    });
  });
  return allEquipment
}

// CREATE ALL INITIAL STEPS FOR RECIPES
const initialCreateSteps = (recipes) => {
  let allSteps = [];
  recipes?.forEach((rec) => {
    rec.analyzedInstructions[0]?.steps?.forEach((step) => {
      if(!allSteps.includes(step.step)) allSteps.push({
        step: step.step,
        ingredients: step.ingredients,
        equipment: step.equipment,
        number: step.number,
      })
    })
  })

  allSteps.forEach(async (eachStep) => {
    const [step, stepCreated] = await Step.findOrCreate({
      where: {
        instructions: eachStep.step,
      },
      defaults: {
        instructions: eachStep.step,
        number: eachStep.number
      },
    });

    eachStep?.ingredients?.forEach(async (eachIngredient) => {
      // console.log('eachStep: ', eachStep)
      // console.log('Ingredient Name: ', eachIngredient.name)
      let toAddIngredient = await Ingredient.findOne({
        where: {name: eachIngredient.name}
      });
      await step.addIngredient(toAddIngredient);
    })

      eachStep?.equipment?.forEach(async (eachEquipment) => {
        // console.log('eachStep: ', eachStep)
        console.log('Equipment Name: ', eachEquipment.name)
        let toAddEquipment = await Equipment.findOne({
          where: {name: eachEquipment.name}
        });
        await step.addEquipment(toAddEquipment);
      })
  });

  return allSteps;
}

// CREATE DATABASE FROM FOOD API
const importAllData = async () => {
  // if (!apiInfo.length) {
  let apiInfo = await getFood();
  
  let allIngredients = initialCreateIngredients(apiInfo);
  let allEquipment = initialCreateEquipment(apiInfo);
  let allDiets = initialCreateDiet(apiInfo);
  let allCuisines = initialCreateCuisines(apiInfo);
  let allOcassions = initialCreateOcassions(apiInfo);
  let allDishTypes = initialCreateDishTypes(apiInfo);
  let allSteps = initialCreateSteps(apiInfo);


  apiInfo.forEach(async (rec) => {
    const [recipe, recipeCreated] = await Recipe.findOrCreate({
      where: {
        title: rec.title,
      },
      defaults: {
        readyInMinutes: rec.readyInMinutes,
        servings: rec.servings,
        title: rec.title,
        image: rec.image,
        sustainable: rec.sustainable,
        likes: rec.likes,
        healthScore: rec.healthScore,
        creditsText: rec.creditsText,
        summary: rec.summary,
      },
    });
    rec.cuisines.forEach(async (eachCuisine) => {
      let toAddCuisine = await Cuisine.findOne({
        where: { name: eachCuisine },
      });
      await recipe.addCuisine(toAddCuisine);
    });
    rec.dishTypes.forEach(async (eachDishType) => {
      let toAddDishType = await DishType.findOne({
        where: { name: eachDishType },
      });
      await recipe.addDishType(toAddDishType);
    });
    rec.diets.forEach(async (eachCDiet) => {
      let toAddDiet = await Diet.findOne({
        where: { name: eachCDiet },
      });
      await recipe.addDiet(toAddDiet);
    });
    rec.ocassions?.forEach(async (eachOcassion) => {
      let toAddOcassion = await Ocassion.findOne({
        where: { name: eachOcassion },
      });
      await recipe.addCuisine(toAddOcassion);
    });
    rec.analyzedInstructions[0]?.steps?.forEach(async (eachStep) => {
      let toAddStep = await Step.findOne({
        where: { name: eachStep.step },
      });
      await recipe.addStep(toAddStep);
    });
  });
};


// GET FILTERED RECIPIES
const getRecipesByFilter = async (readyInMinutes, servings, title, diets) => {
  let recipes = await Recipe.findAll()
  // ver contains
  return recipes
}

// GET RECIPE BY ID
const getRecipeById = async (id) => {
let recipe = await Recipe.findByPk(id, {
  include:[
    {
      model: Cuisine,
      attributes: ['name'],
      through: {attributes: []},
    },    {
      model: Diet,
      attributes: ['name'],
      through: {attributes: []},
    },    {
      model: DishType,
      attributes: ['name'],
      through: {attributes: []},
    },    {
      model: Ocassion,
      attributes: ['name'],
      through: {attributes: []},
    },
  ]
})
return recipe
}


module.exports = {
  getFood,
  importAllData,
  getRecipeById,
  getRecipesByFilter
};
