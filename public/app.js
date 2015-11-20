'use strict';

$(function(){


  console.log('loaded!');
  let renderArtistTemplate = Handlebars.compile($('template#artist-template').html());
  let renderPaintingTemplate = Handlebars.compile($('template#painting-template').html());

  let renderArtists = function(data){
    console.log('clicked!');
    console.log(data);
    let artistTemplate = renderArtistTemplate({artists: data});
    $('.results-div').empty().append(artistTemplate);
  };

  let renderPaintings = function(data){
    console.log('fuck ya');
    console.log(data);
    let paintingTemplate = renderPaintingTemplate({paintings: data});
    $('.results-div').empty().append(paintingTemplate);
  };


  $('.artist-link').click(function(event){

    console.log('artist link clicked');
    $.get('/artists').done(function(response){renderArtists(response)});
  });




  $('.paintings-link').click(function(event){

    $.get('/paintings', renderPaintings);
  });






});
