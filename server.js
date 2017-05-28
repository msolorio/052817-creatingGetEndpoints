
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const { Recipes, ShoppingList } = require('./models');

const jsonParser = bodyParser.json();
const app = express();

// log the http layer
app.use(morgan('common'));

// add shopping list items
ShoppingList.create('beans', 2);
ShoppingList.create('tomatoes', 3);
ShoppingList.create('peppers', 4);

// adds recipes
Recipes.create('bean dip', ['beans', 'onions', 'garlic']);
Recipes.create('tomato Gulosh', ['tomatoes', 'peanuts', 'rice powder']);
Recipes.create('pepper soup', ['peppercorn', 'hot peppers', 'green peppers']);

app.get('/shopping-list', (req, res) => {
  res.json(ShoppingList.get());
});

// returns all shopping list items
app.get('/recipes', (req, res) => {
  res.json(Recipes.get());
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
