
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users','recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'TestUser1' , password: 'lol123', email: 'test1@gmail.com', name:'John Doe'},
        {username: 'TestUser2', password: 'lol123',  email: 'test2@gmail.com', name:'Jane Doe'},
        {username: 'TestUser3', password: 'lol123',  email: 'test3@gmail.com', name:'John Doe'},
      ]);
    })
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {user_id: 1, title: 'testrecipe1', ingredients: 'ramen', instructions:'cry', source: 'church'},
        {user_id: 2, title: 'testrecipe2',  ingredients: 'egg', instructions:'eat', source: 'church'},
        {user_id: 3, title: 'testrecipe3',  ingredients: 'water', instructions:'sleep', source: 'church'},
      ]);
    });
};
