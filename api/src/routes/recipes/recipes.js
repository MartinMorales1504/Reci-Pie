const { Router } = require("express");
const axios = require("axios");

const functions = require("../../functions/food_functions");
const API_KEY = "c3156f4fb99744ec932f43f5be2839ea";

const recipes = Router();

recipes.get("/import", async (req, res) => {
  try {
    const info = await functions.importAllData();
    res.send(info);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

recipes.get("/filter", async (req, res) => {
  let { MaxreadyInMinutes, MinreadyInMinutes, servings, title } = req.query;
  let { diets } = req.body;
  if (!MinreadyInMinutes) MinreadyInMinutes = 0;
  if (!MaxreadyInMinutes) MaxreadyInMinutes = 99999;
  if (!servings) servings = 0;
  if (!title) title = "";

  try {
    const filteredRecipies = await functions.getRecipesByFilter(
      MaxreadyInMinutes,
      MinreadyInMinutes,
      servings,
      title,
      diets
    );
    res.send(filteredRecipies);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

recipes.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await functions.getRecipeById(id * 1);
    res.send(recipe);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

recipes.post("/create", async (req, res) => {
  const {
    readyInMinutes,
    servings,
    title,
    image,
    creditsText,
    summary,
    cuisisnes,
    diets,
    dishTypes,
    ocassions,
    steps,
  } = req.body;

  try {
    const recipe = await functions.createRecipe(
      readyInMinutes,
      servings,
      title,
      image,
      creditsText,
      summary,
      cuisisnes,
      diets,
      dishTypes,
      ocassions,
      steps
    );
    res.send(recipe);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = recipes;
