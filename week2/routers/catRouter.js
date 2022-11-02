'use strict'

// const express = require("express");

const express = require("express");

const router = express.Router();
// const catController = require("../controllers/catController");
//
// router.get("/", catController.cat_list_get);
//


router.get('/cat', (req, res) => {
    //console.log(req);
    res.send('From this endpoint you can get cats.')
});
router.get('/cat/:catId', (req, res) => {
    //console.log(req.params);
    res.send('From this endpoint you can get cat with id ' + req.params.catId);
});
router.post('/cat', (req, res) => {
    res.send('From this endpoint you can add more cats.');
});
router.put('/cat', (req, res) => {
    res.send('From this endpoint you can edit cats.');
});
router.delete('/cat', (req, res) => {
    res.send('From this endpoint you can delete cats.');
});

module.exports = router;