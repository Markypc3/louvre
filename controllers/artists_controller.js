'use strict';
let express = require('express');
let router = express.Router();
// var mongoose = require('mongoose');
// var db = mongoose.connect(
//   'mongodb://localhost/museumrApp',function(){
//     console.log('connected to mongodb');
//   });
let Artist = require('../models/artists.js');
let Painting = require('../models/paintings.js');
console.log(Artist);
router.route('/')
  .get(function(req, res, next) {
    debugger;
    console.log('hit');
    Artist.find(null,function(err, artists){
      console.log(artists);
      res.send(artists);
    });
  });
// router.route('/new')
// router.route('/')

router.route('/:id')
  .get(function(req,res,next){
    Artist.findById(req.params.id,function(err, artists){
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
        else if (artist) {
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
    .post(function(req, res, next) {

    });



module.exports = router;
