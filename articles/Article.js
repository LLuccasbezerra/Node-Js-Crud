const Sequelize = require("sequelize");
const connection = require("../database/database");

const Category = require("../categories/Category");

const Article = connection.define("articles", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Category.hasMany(Article); // One category has many articles
Article.belongsTo(Category); // One articles belongs to one category

module.exports = Article;
