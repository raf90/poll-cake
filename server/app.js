const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(bodyParser.json({
  extended: true
}));

const mongoUser = process.env.DB_USERNAME;
const mongoPass = process.env.DB_PASSWORD;
const mongoPath = process.env.DB_PATH;
const mongoPort = process.env.DB_PORT;

mongoose.connect(`mongodb://${mongoUser}:${mongoPass}@${mongoPath}:${mongoPort}/admin`,{ useNewUrlParser: true });

var answersSchema = mongoose.Schema({ desc: String});
var questionSchema = mongoose.Schema({ desc: String, answers: [answersSchema]});
var pollSchema = mongoose.Schema({questions: [questionSchema] });

var linkSchema = mongoose.Schema({ poll_id: String });

var Poll = mongoose.model('Poll', pollSchema);
var Link = mongoose.model('Link', linkSchema);

app.post('/api/link', function(req, res) {
  var poll_id = req.body.poll_id;
  Link.create({ poll_id }, (err, link) => {
    res.send(link);
  });
});

app.get('/api/link/:id', function(req, res){
  var link_id = req.params.id;
  Link.findById(link_id, function(err, link) {
    Poll.findById(link.poll_id, function(err, poll) {
      res.send(poll);
    });
  });
});

app.post('/api/post', function(req, res) {
  Poll.create({
      questions: [
        { 
          desc: 'What is going on?',
          answers: [
            {
              desc: 'not much',
            },
          ],
        }
      ],
    }, function(err, poll){
      res.send(poll);
    });
});

app.get('/api/', function(req, res) {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;
