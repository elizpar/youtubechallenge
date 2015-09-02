
$(function(){

  $("#search-term").submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();

    var params = {
      part: 'snippet',
      key: 'AIzaSyDDVUcMpTZeyPo0UTVB0wRlZVsc1Q00zxk',
      q: searchTerm,
      r: 'json'
    };

    $.getJSON('https://www.googleapis.com/youtube/v3/search', params, function(data){
    var myData = data.items[0].snippet.thumbnails.default.url;
    console.log(myData);
    showResults();
      
  	function showResults(){
	    for (var i = 0; i < data.items.length; i++) {
         $('.search-results').append('<span>' + myData + '</span><br>');
         // console.log(myData);
	       };
    	}
    });
  });  
});