const express = require('express');
const router = new express.Router;

router.get('/', async(req, res) => {
    try{
        res.status(200);
        res.send("all working fine for default page");
    }
    catch(err) {
        console.log(err);
    }
});

module.exports = router;