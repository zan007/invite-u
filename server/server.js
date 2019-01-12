const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use("/", express.static(__dirname));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port);
