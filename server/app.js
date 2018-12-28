const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

const mongoUser = process.env.DB_USERNAME;
const mongoPass = process.env.DB_PASSWORD;
const mongoPath = process.env.DB_PATH;
const mongoPort = process.env.DB_PORT;

mongoose.connect(`mongodb://${mongoUser}:${mongoPass}@${mongoPath}:${mongoPort}/admin`,{ useNewUrlParser: true });
var Poll = mongoose.model('Poll', {question: 'string' });
//var myPoll = new Poll({question: 'What is going on?'});
//myPoll.save(); 

app.get('/api/', function(req, res) {
  Poll.findOne({}, 'question', (err, poll) => {
    res.send(poll.question);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;
