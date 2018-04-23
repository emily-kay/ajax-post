const express = require('express');
const bodyParser = require('body-parser');//
const app = express();
const PORT = 5000;

//this will eventually be found in the database
const recordRouter = require('./routes/record.route.js');


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true})); //you *need*this*line* to get the post to work and submit to your page
app.use('/record', recordRouter)



app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});//end listen