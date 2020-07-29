
exports.seed = function(knex) {
  // Deletes ALL existing entries

      return knex('Ingredients').insert([
        {name: 'pork chops'},
        {name: 'black pepper'},
        {name: 'dried cranberries'},
        {name: 'apple'},
        {name: 'orange'},
        {name: 'whole-wheat pitas'},
        {name: 'tangy salsa'},
        {name: 'boneless chicken'},
        {name: 'rinsed cilantro'},
        {name: 'scallions'},
        {name: 'baking potatos'},
        {name: 'fresh shives'},
        {name: 'salt'},
        {name: 'mixed vegetables'},
        {name: 'grilled chicken'},
        {name: 'fresh parsley'},

      ]);
    }