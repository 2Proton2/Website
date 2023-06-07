const express = require('express');
const app = express();
const port = process.env.PORT || 9000;


/**
 * server listening
 */
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})