const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const todos = require('./todos');

const app = express();
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(bodyParser.json());

app.get('/todos', (req, res) => {
  console.log('got request', req);
  res.send(todos);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
