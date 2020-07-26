const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/recipes";

module.exports = {
  //Development
    development: {
        client: "sqlite3",
        connection: {
            filename: "./data/recipes.db3",
        },
        useNullAsDefault: true,
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
        client: "pg",
        connection: pgConnection,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: "./data/migrations",
        },
        seeds: {
            directory: "./data/seeds",
        },
    },
};
