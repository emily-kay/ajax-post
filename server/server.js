const express = require('express');
const app = express();
const PORT = 5000;

//this will eventually be found in the database
const recordCollection = require('./modules/record-collection.js');


app.use(express.static('server/public'));


//routes (get,post,put delete requests)
app.get('/records', (req, res) =>{
    res.send(recordCollection);
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});//end listen