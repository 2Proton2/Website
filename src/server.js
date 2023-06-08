const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
app.use(express.json());

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