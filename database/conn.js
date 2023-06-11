const knex = require('knex');

let database = knex({
    client: 'pg',
    connection : {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '123',
        database: 'students'
    },
    pool: {
        min: 2,
        max: 10
    }
});

module.exports = database;
