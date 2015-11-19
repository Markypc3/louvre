'use strict';


$(function(){
  console.log('loaded!');
  let renderArtistTemplate = Handlebars.compile($('template#artist-template').html());

  $('.artist-link').click(function(event){
    event.preventDefault();
    console.log(renderArtists());
    $.get('/artists', renderArtists);
  });

  let renderArtists = function(data){
    console.log('clicked!');
    console.log(data);
    let artistTemplate = renderArtistTemplate({artists: data});
    $('.results-div').append(artistTemplate);
  };


});
