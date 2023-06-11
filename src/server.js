const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
app.use(express.json());
const database = require('../database/conn');

/**
 * setting up the router
 * registering the router via express;
 */
const router = require('./routes/routes');
app.use(router);

/**
 * server listening
 */
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})


/**
 * close the database connection when terminating the program
 */
process.on('SIGINT', () => {
    database.destroy().then(() => {
        console.log('Connection pool closed successfully');
        process.exit(0);
    });
});