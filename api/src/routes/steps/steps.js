const { Router } = require("express");
const axios = require("axios");

const functions = require("../../functions/step_functions");

const steps = Router();

steps.post("/create", async (req, res) => {
  const { instructions, number, ingredients, equipments } = req.body;

  try {
    const step = await functions.createStep(
      instructions,
      number,
      ingredients,
      equipments
    );
    res.send(step);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = steps