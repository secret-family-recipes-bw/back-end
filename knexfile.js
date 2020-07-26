const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/recipes";

module.exports = {
  //Development
    development: {
        client: "sqlite3",
        useNullAsDefault: true,
        connection: {
            filename: "./data/recipes.db3",
        },
        pool: {
          afterCreate: (conn, done) => {
            conn.run('PRAGMA foreign_keys = ON', done);
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
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/recipe.db3",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  }

}