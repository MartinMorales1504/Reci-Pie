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
  User,
} = require("../db");

// CREAR USUARIO
const createUser = async (
  name,
  lastName,
  email,
  password,
  vegan,
  vegetarian,
  celiac
) => {
  if (name && lastName && email && password) {
    const [newUser, created] = await User.findOrCreate({
      where: {
        email: email,
      },
      defaults: {
        name: name,
        lastName: lastName,
        email: email,
        password: password,
        vegan: vegan,
        vegetarian: vegetarian,
        celiac: celiac,
      },
    });
    if (created) {
      return `User ${name} ${lastName} created successfully`;
    } else {
      return "The user cannot be created with those data";
    }
  }
  return "Missing data";
};

// Buscar usuario por ID
const logInUser = async (email, password) => {
  let user = await User.findOne({
    where: {
      email: email,
      password: password,
    },
  });
};

module.exports = {
  createUser,
  logInUser,
};
