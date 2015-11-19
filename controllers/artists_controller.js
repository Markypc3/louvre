'use strict';
let express = require('express');
let router = express.Router();
let Artist = require('./models/artists.js');

router.route('/')
  .get(function(req, res, next) {
    res.send('hello world');
  });
router.route('/new')
router.route('/')

router.route('/:id')
  .get(function(req,res,next){
    Artist.find(function(err, artists){
      if (err) {
        throw err;
      }
      else {
        res.send(artists);
      }
    });
  })
  // .put(function(req, res, next){
  //
  // })
  // .delete(function(req, res, next){
  //
  // })
  router.route('/:id/paintings')
    .get(function(req, res, next){
      let artistId = req.params.id;
      let paintings = [];
      Artist.find({ _id : artistId }, function(err, artist){
        if (err) {
          throw err;
        }
        else (artist) {
          for (var paintingId in artist.paintings) {
            Paintings.find({ _id : paintingId },
              function(err, painting) {
                if (err) throw err;
                paintings.push(painting);
                if (paintings.length == artist.paintings.length) {
                  res.send({artistPaintings : paintings});
                }
              });
          }
        }
      })
    })




module.exports = router;
