var express = require('express');
var app = express();

// var db_name = "sampledb"
//provide a sensible default for local development
// mongodb_connection_string = 'mongodb://127.0.0.1:27017/' + db_name;
//take advantage of openshift env vars when available:
// if(process.env.OPENSHIFT_MONGODB_DB_URL){
//   mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL + db_name;
// }


var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',

app.listen(port, ip, function () {
  console.log( "Listening on " + ip + ", port " + port )
});

app.get('/', function (req, res) {
  res.send('Yeet!');
});
