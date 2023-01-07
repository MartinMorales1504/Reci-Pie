const { Router } = require("express");
const axios = require("axios");

const functions = require("../../functions/user_functions");

const users = Router();

users.post("/create", async (req, res) => {
  let { name, lastName, email, password, vegan, vegetarian, celiac } = req.body;
  try {
    const newUser = await functions.createUser(
      name,
      lastName,
      email,
      password,
      vegan,
      vegetarian,
      celiac
    );
    res.status(200).send(newUser);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = users;
