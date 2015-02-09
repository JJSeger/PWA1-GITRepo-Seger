//Judd Seger
//02-08-15
//Week #1 :: { Homework } - ANALYZE Buggy











// Create privatized scope using a self-executing function
(function(){                                                                                      //Search engine main Function
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)                                //comment for the code below
	var resultsDIV = document.getElementById("results"),                                          //variable declaration for resultDIV giving the value of the method
                                                                                                  // getElementById and storing it in "results"
		searchInput = document.forms[0].search,                                                   //document.forms[0].search is the method used for searching
                                                                                                  //the array and putting the result into the variable searchInput
		currentSearch = ''                                                                        //undeclared variable
	;
	
	// Validates search query                                                                      //comment line for
	var validqte == function(query){                                                                //declaring the misspelled variable validqte to equal the value
                                                                                                    //the function with the parameter of query

    		// Trim whitespace from start and end of search query                                      //comment line for
		while(query.charAt(0) = " "){                                                                   //while statement that does not let the query return anything if there are no characters
			query = query.substring(1, query.length);
		};
		while(query.charAt(query.length-1) === ""){
			query = query.substring(0, query.length-1);
		;
		
		// Check search length, must have 3 characters                                              //comment line for
		if(query.length < 3){
			alert("Your search query is too small, try again.);
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)                                                 //comment line for
			searchInput.focus();
			return;
		};
		
		search(query);
	};

	// Finds search matches                                                                          //comment line for
	var search = function(query)
		
		// split the user's search query string into an array                                        //comment line for
		var queryArray = query.join(" ");
		
		// array to store matched results from database.js                                           //comment line for
		var results = [];

		// loop through each index of db array                                                        //comment line for
		for(var i=0, j=db.length; i<j; i++){
		
			// each db[i] is a single video item, each title ends with a pipe "|"                     //comment line for
			// save a lowercase variable of the video title                                           //comment line for
			var dbTitleEnd = db[i].indexOf('|');
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);
			
			// loop through the user's search query words                                             //comment line for
			// save a lowercase variable of the search keyword                                        //comment line for
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){
				var qitem = queryArray[ii].tolowercase();
				
				// is the keyword anywhere in the video title?                                         //comment line for
				// If a match is found, push full db[i] into results array                             //comment line for
				var compare = dbitem.indexOf(qitem);
				if(compare !== -1){
					results.push(db[i]);
				};
			;
		;
		
		results.sort();
		
		// Check that matches were found, and run output functions                                      //comment line for
		if(results.length = 0){
			noMatch();
		}else{
			showMatches(results);
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)                     //comment line for
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors                                                       //comment line for
	var showMatches = function(results){
		
		// THE NEXT 4 LINES ARE CORRECT.                                                                       //comment line for
		var html = '<p>Results</p>', 
			title, 
			url
		;
		
		// loop through all the results search() function                                                      //comment line for
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe                                                                   //comment line for
			// pull the title's string using index numbers                                                     //comment line for
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title                                                               //comment line for
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.                                                  //comment line for
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.                                                    //comment line for
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.                                          //comment line for
	// THE LINE DIRECTLY BELOW IS CORRECT                                                                        //comment line for
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;
		validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material             //comment line for
        // THE LINE DIRECTLY BELOW IS CORRECT                                                                     //comment line for
		return false;
	;

})();