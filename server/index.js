
var express = require('express');
var cors = require('cors');
const path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../public')));
console.log(__dirname + '/public');
app.use(cors());

let port = 3000;


app.get('/:id', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));
});

app.listen(port, () => {
  console.log(`Server started and listening on ${port}`);
});