
$(function(){

  $("#search-term").submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    
    $.getJSON('hhttps://www.googleapis.com/youtube/v3/search' + searchTerm + '&r=json', function(data){
    var myData = data.Search;
    showResults(myData);
    console.log(myData);
    
    part: 'snippet'
    key: your API key as a string
    q: put the search term here in the form of a string

  	function showResults(results){
	    for (var i = 0; i < data.Search.length; i++) {
         $('.search-results').append('<span>' + data.Search[i].Title + '</span><br>');
         console.log(data.Search[i].Title);
	       };
    	}
    });
  });  
});