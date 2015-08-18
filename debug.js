var app = require('express.io')();
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


app.http().io();

// Send the client html.
app.get('/', function(req, res) {
  res.sendfile(__dirname + '/client.html')
});

app.io.route('element', function(req) {
  req.io.broadcast('element-data', req.data);
});

app.io.route('update-element', function(req) {
  req.io.broadcast('refresh-element', req.data);
});

function setPort() {
  rl.question('What port would you like to use? [7076]', function(port) {
    if (port === '') {
      port = 7076;
    }

    if(typeof parseInt(port) !== 'number') {
      setPort();
      return;
    }

    app.listen(port);
    console.log('Point your browser to http://localhost:' + port + ' to start or press CTRL-C to quit.');
  });
}

setPort();