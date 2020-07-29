
exports.seed = function (knex) {
  return knex('RecipeServices').insert([
    { ingredients_id: 1, recipe_id: 1, quantity: 2 },
    { ingredients_id: 2, recipe_id: 1, quantity: 1 },
    { ingredients_id: 3, recipe_id: 1, quantity: 8 },
    { ingredients_id: 4, recipe_id: 1, quantity: 1 },
    { ingredients_id: 5, recipe_id: 1, quantity: 1 },
    { ingredients_id: 6, recipe_id: 1, quantity: 1 },
    { ingredients_id: 7, recipe_id: 2, quantity: 1 },
    { ingredients_id: 8, recipe_id: 2, quantity: 2 },
    { ingredients_id: 9, recipe_id: 2, quantity: 1 },
    { ingredients_id: 10, recipe_id: 2, quantity: 1 },
    { ingredients_id: 11, recipe_id: 3, quantity: 2 },
    { ingredients_id: 12, recipe_id: 3, quantity: 2 },
    { ingredients_id: 13, recipe_id: 3, quantity: 2 },
    { ingredients_id: 14, recipe_id: 3, quantity: 2 },
    { ingredients_id: 15, recipe_id: 3, quantity: 2 },
    { ingredients_id: 16, recipe_id: 3, quantity: 2 },

  ]);

};
