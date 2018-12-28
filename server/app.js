const express = require('express');
const app = express()
const port = 5000

app.get('/api/hello', (req, res) => res.send('Hello from the backend!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;
