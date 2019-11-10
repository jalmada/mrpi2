var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hola Esposi Te abo mucho, eres mi favorita!!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


//proxy22.rt3.io:34912
