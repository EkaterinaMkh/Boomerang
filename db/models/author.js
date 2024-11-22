'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
 
    
      static associate(model) {
      }   
  }

  Author.init({
    first_name: DataTypes.STRING,
    score: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};

