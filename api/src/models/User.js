const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      vegan: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      vegetarian: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      // Gluten free
      celiac: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      // lactoseIntolerant: {
      //   type: DataTypes.BOOLEAN,
      //   defaultValue: false
      // },
    },
    {
      timestamps: false,
    }
  );
};
