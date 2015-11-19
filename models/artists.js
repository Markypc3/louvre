'use strict';

let mongoose = require('mongoose');

let artistSchema = new mongoose.Schema({
  name: String,
  img_url: String,
  nationality: String,
  birthYear: Number,
  description: String,
  paintings: Array
});

let Artists = mongoose.model('Artists', artistSchema);
module.exports = Artists;
