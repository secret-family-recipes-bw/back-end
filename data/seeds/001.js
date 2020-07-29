
exports.seed = function (knex) {

  return knex('Users', 'Recipes', 'Ingredients', 'Instructions', 'RecipeServices')
    .then(() => {
      knex('Users').insert([
        { username: 'TestUser1', password: 'lol123', email: 'test1@gmail.com', name: 'John Doe' },
        { username: 'TestUser2', password: 'lol123', email: 'test2@gmail.com', name: 'Jane Doe' },
        { username: 'TestUser3', password: 'lol123', email: 'test3@gmail.com', name: 'John Doe' },
      ])

        .then(function () {
          // Inserts seed entries
          knex('Recipes').insert([
            { user_id: 1, title: 'baked pork chops with apple cranberry sauce', category: 'dinner', source: 'mom', image: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Cranberry-Apple-Pork-Chops_exps46377_SD132779A06_12_7bC_RMS.jpg' },
            { user_id: 2, title: 'empañapita', category: 'lunch', source: 'KTB_Family', image: 'https://ptclinic.com/img/photos/empanapita.jpg' },
            { user_id: 3, title: 'shepherd’s pie', category: 'dinner', source: 'KTB_Family', image: 'https://www.thewholesomedish.com/wp-content/uploads/2019/02/The-Best-Classic-Shepherds-Pie-550-500x500.jpg' },
          ])

            .then(function () {
              // Inserts seed entries
              knex('Ingredients').insert([
                { name: 'pork chops' },
                { name: 'black pepper' },
                { name: 'dried cranberries' },
                { name: 'apple' },
                { name: 'orange' },
                { name: 'whole-wheat pitas' },
                { name: 'tangy salsa' },
                { name: 'boneless chicken' },
                { name: 'rinsed cilantro' },
                { name: 'scallions' },
                { name: 'baking potatos' },
                { name: 'fresh shives' },
                { name: 'salt' },
                { name: 'mixed vegetables' },
                { name: 'grilled chicken' },
                { name: 'fresh parsley' },

              ])
            })
        })
        .then(function () {
          // Inserts seed entries
          knex('Instructions').insert([
            { recipe_id: 1, step_number: 1, step: 'Preheat oven to 350 ºF.' },
            { recipe_id: 1, step_number: 2, step: ' Season pork chops with pepper and orange zest' },
            { recipe_id: 1, step_number: 3, step: 'In a large sauté pan, heat olive oil over medium heat  Turn over and brown the second side, an additional 2 minuste' },
            { recipe_id: 1, step_number: 4, step: 'Serve one pork chop with ¼ cup of sauce and two orange segments' },
            { recipe_id: 2, step_number: 1, step: 'Preheat oven to 400 ºF' },
            { recipe_id: 2, step_number: 2, step: 'Combine beans, vegetables, chicken, cheese, and seasonings. Mix well.' },
            { recipe_id: 2, step_number: 3, step: 'Cut pitas in half, and open the pockets. Divide filling evenly  between the four halves (about 1½ cups each).' },
            { recipe_id: 2, step_number: 4, step: 'Place pitas on a nonstick baking sheet, and bake for about 10 minutes until the filling is hot, cheese melts, and chicken is reheated.' },
            { recipe_id: 2, step_number: 5, step: 'Serve each empañapita with ¼ cup of Tangy Salsa.' },
            { recipe_id: 3, step_number: 1, step: 'Place potatoes in a medium saucepan, and add enough cold water to cover by 1 inch. Bring to a boil, and simmer gently until the potatoes can be easily pierced with a fork, about 20 to 30 minutes.' },
            { recipe_id: 3, step_number: 2, step: 'While the potatoes are cooking, begin to prepare the filling.Combine the vegetables, chicken broth, and oats in a medium saucepan. Bring to a boil, and simmer gently until the oatmeal is cooked, about 5–7 minutes. Add chicken, and continue to simmeruntil heated through. Season with parsley and pepper. Hold warm until potatoes are ready' },
            { recipe_id: 3, step_number: 3, step: 'When potatoes have about 5 minutes left to cook, preheat the oven to 450 ºF.' },
            { recipe_id: 3, step_number: 4, step: ' When the potatoes are done, drain and dry them well, then mash with a potato masher or big fork.' },
            { recipe_id: 3, step_number: 5, step: 'Bake in the preheated oven for about 10 minutes, or until the potatoes are browned and chicken is reheated (to a minimum internal temperature of 165 ºF). Serve immediately.' },
          ]);
        })
        .then(function () {
          // Inserts seed entries
          knex('RecipeServices').insert([
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
        })
    })
};
