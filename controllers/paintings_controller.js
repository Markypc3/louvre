'use strict';
let express = require('express');
let router = express.Router();
let Paintings = require('../models/paintings.js');
let Artists = require('../models/artists.js');

router.route('/paintings/all')
  .get((req, res, next), function(){
    res.send(Paintings.all());
  });

  router.route('/paintings/:id')
  .get((req, res, next), function(){
    let result = Paintings.find({"_id":req.params.id});
    res.send(result);
  });

module.exports = router;
