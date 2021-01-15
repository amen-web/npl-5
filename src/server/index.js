const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
var aylien = require('aylien_textapi');
const body_Parser = require('body-parser');

const app = express();


// middile ware
app.use(body_Parser.urlencoded({ extended: false }));
app.use(body_Parser.json());


app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});



app.post('/testing', async (req, res, next) => {
    try {
      var data = textapi.sentiment({
        'text': req.body.theText
      }, function(error, response) {
        if (error === null) {
          console.log(response);
          res.send(response);
        }
      });
    } catch(error) {
      return next(error)
    }
  });



app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});
console.log(`Your API key is ${process.env.API_KEY}`);

const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
 });