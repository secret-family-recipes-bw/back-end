const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/recipes";

module.exports = {
  //Development
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/recipes.db3",
    },
    // needed when using foreign keys
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  //Testing
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },


  // Heroku
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations",
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: "./data/seeds",
    },
  }
}

