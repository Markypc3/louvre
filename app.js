'use strict';
let express = require('express');
let app = express();
var mongoose = require('mongoose');
var db = mongoose.connect(
  'mongodb://localhost/museumrApp',function(){
    console.log('connected to mongodb');
  });
let artistRoutes = require('./controllers/artists_controller');
let paintingRoutes = require('./controllers/paintings_controller.js');
app.use(express.static('./public'));
app.use('/artists', artistRoutes);
app.use('/paintings', paintingRoutes);

let server = app.listen(3000,function() {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Louvre App listening on port ' + port);
});
