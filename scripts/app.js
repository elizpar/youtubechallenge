
$(function(){

  $("#search-term").submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    
    $.getJSON('hhttps://www.googleapis.com/youtube/v3/search' + searchTerm + '&r=json', function(data){
    var myData = data.Search;
    showResults(myData);
    console.log(myData);
    var params = {
      part: 'snippet',
      key: 'AIzaSyDDVUcMpTZeyPo0UTVB0wRlZVsc1Q00zxk',
      q: 'searchTerm'
    }
    
  	function showResults(results){
	    for (var i = 0; i < data.Search.length; i++) {
         $('.search-results').append('<span>' + data.Search[i].Title + '</span><br>');
         console.log(data.Search[i].Title);
	       };
    	}
    });
  });  
});