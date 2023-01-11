const { DataTypes, BOOLEAN } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("recipe", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    readyInMinutes: {
      type: DataTypes.INTEGER,
    },
    servings: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // sustainable: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    // },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    // healthScore: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },

    // Author credits
    creditsText: {
      type: DataTypes.STRING,
      allowNull: false  
    },
    summary: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
  },
  {
    timestamps: false,
  }
);
};
