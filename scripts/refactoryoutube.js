$(function(){

  var ytSearch = {};

  // Models
  ytSearch.Video = function() {

  };

  //constructor for object that starts out empty
  ytSearch.Shelf = function() {
    this.videos = [];
  };
  //functon takes the search term
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
    this.queryInput = $('#query');
    this.searchForm = $('#search-term');
    this.searchResults= $('.search-results');
    //.bind makes this reference the function
    this.seachForm.submit(this.onSubmit.bind(this));
    
  };

  //method stores searchterm
   ytSearch.View.prototype.onSubmit = function() {
      event.preventDefault();
      var searchTerm = this.queryInput.val();
      ytSearch.Shelf.search(searchTerm, this.render.bind(this));
   }

  ytSearch.View.prototype.render = function(shelf) {
    this.searchResults.empty();
    for (var i = 0; i < shelf.videos.length; i++) {
      var vidId = shelf.videos[i].id.videoId;
      console.log(vidId);
      var addThumbnail = '<span><a href="https://www.youtube.com/watch?v='+ vidId +'"><img src="https://i.ytimg.com/vi/' + vidId+ '/default.jpg"></a></span><p>';
      this.searchResults.append(addThumbnail);
      console.log(vidId);
    };

  }

  var view = new ytSearch.View();

});
