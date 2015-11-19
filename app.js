'use strict';
let express = require('express');
let app = express();
let artistRoutes = require('./controllers/artists_controller')
app.use(express.static('./public'));
app.use('/artists', artistRoutes);

let server = app.listen(3000,function() {
  let host = server.address().address;
  let port = server.address().port;
});
