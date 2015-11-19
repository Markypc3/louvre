'use strict';
let express = require('express');
let router = express.Router();
let Paintings = require('../models/paintings.js');
let Artists = require('../models/artists.js');

router.route('/paintings/all')
  .get((req, res, next) => {
    // find events
    res.send(Paintings.all());
  });

module.exports = router;
