'use strict';
let express = require('express');
let router = express.Router();
let Paintings = require('../models/paintings.js');
let Artists = require('../models/artists.js');

router.route('/')

  .get(function(req, res, next){
    Paintings.find(function(err, allPaintings) {
      res.send(allPaintings);
    });
  });

  router.route('/paintings/:id')
  .get(function(req, res, next){
    let result = Paintings.findById(req.params.id);
    res.send(result);
  });

  // router.route('/:id/delete')
  // .get((req, res, next), function(){
  //   let result = Paintings.find({"_id":req.params.id});
  //   res.send(result);
  // });

module.exports = router;
