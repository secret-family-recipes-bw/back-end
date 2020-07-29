
exports.seed = function(knex) {

      return knex('Users').insert([
        {username: 'TestUser1' , password: 'lol123', email: 'test1@gmail.com', name:'John Doe'},
        {username: 'TestUser2', password: 'lol123',  email: 'test2@gmail.com', name:'Jane Doe'},
        {username: 'TestUser3', password: 'lol123',  email: 'test3@gmail.com', name:'John Doe'},
      ])
      .then(() => console.log("\n== Seed data for users table added. ==\n"));
};
