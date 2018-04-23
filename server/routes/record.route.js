const express = require('express');
const router = express.Router();

const recordCollection = require('../modules/record-collection.js');

//routes (get,post,put delete requests)
router.get('/', (req, res) =>{
    res.send(recordCollection);
}); //you can check if this is running by going to http://localhost:5000/records

router.post('/', (req, res) =>{
    console.log(req.body); //whatever we send back as data in our post is req.body on the server*********
    recordCollection.push(req.body);
    res.sendStatus(200);
}); //this adds the song to the array but you have to refresh the page to see the addition

module.exports = router;