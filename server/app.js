const express = require('express');
const app = express();
const port = 5000;

app.get('/api/', function(req, res) {
  res.send('Hello World from the server!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;
