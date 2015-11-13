$(function(){

var ytSearch = {};

// Models
ytSearch.Video = function() {

};

//constructor for object that starts out empty
ytSearch.Shelf = function() {
  this.videos = [];
};

ytSearch.Shelf.search = function(searchTerm, callback) {
  var params = {
    part: 'snippet',
    key: 'AIzaSyDDVUcMpTZeyPo0UTVB0wRlZVsc1Q00zxk',
    q: searchTerm,
    r: 'json'
  };
  //grabbing data
  $.getJSON('https://www.googleapis.com/youtube/v3/search', params, function(data){
    //storing data in empty object
    var shelf = new ytSearch.Shelf();
    //assigning data.items to videos property
    shelf.videos = data.items;
    //giving the shelf as callback
    callback(shelf);

  });
};
// VIEW
//part 3, restudy how to create a method, then create it. the listener should callback to the method
//part 5, within the method, call the ytSearch.videos.search method **

//constructor for the view, with listener for submit button
ytSearch.View = function() {
  $("#search-term").submit(function(event){
    this.onSubmit();
  //.bind makes this reference the function
  }.bind(this));

  
};

 ytSearch.View.prototype.onSubmit = function() {
    event.preventDefault();
    var searchTerm = $('#query').val();
   
    ytSearch.Videos.search(SearchTerm, function(shelf) {
  
});
  }//do you have to pass params into a function that takes params?



ytDisplay.submit(searchTerm);


//console log video, update search function, instead of sending an empty video option
console.log(myVideos.videos);

myVideos.videos.push(new ytSearch.Video());
var myVideos = new ytSearch.Videos();

$("#search-term").submit(function(event){
  event.preventDefault();
  var searchTerm = $('#query').val();

  

    showResults(data.items);
     
    function showResults(results){
      $('.search-results').empty();
      for (var i = 0; i < results.length; i++) {
        var vidId = results[i].id.videoId;
        console.log(vidId);
        var addThumbnail = '<span><a href="https://www.youtube.com/watch?v='+ vidId +'"><img src="https://i.ytimg.com/vi/' + vidId+ '/default.jpg"></a></span><p>';
        $('.search-results').append(addThumbnail);
        console.log(vidId);
      };
      
  	}
  });
});

});