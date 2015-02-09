//Judd Seger
//02-08-15
//Week #1 :: { Homework } - ANALYZE Buggy











// Create privatized scope using a self-executing function
(function(){                                                                                           //Search engine main Function
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)                                     //comment for the variables
	var resultsDIV = document.getElementById("results"),                                               //variable declaration for resultDIV giving the value of the method
                                                                                                       // getElementById and storing it in "results"
		searchInput = document.forms[0].search,                                                        //document.forms[0].search is the method used for searching
                                                                                                       //the array and putting the result into the variable searchInput
		currentSearch = ''                                                                             //undeclared variable
	;
	
	// Validates search query                                                                           //comment line for the query search validation
	var validqte == function(query){                                                                    //declaring the variable validqte to equal the value
                                                                                                        //the function with the parameter of query

    		// Trim whitespace from start and end of search query                                       //comment line
		while(query.charAt(0) = " "){                                                                   //while statement that does not let the query return anything if there are no characters
			query = query.substring(1, query.length);                                                   //this is assigning the value of query.substring wth the parameters 1,and the query.length function to query
		};                                                                                              //end of first while statement
		while(query.charAt(query.length-1) === ""){                                                     //while statement that sets the query characters at the value of query.length -1
			query = query.substring(0, query.length-1);                                                 //this line sets the value of query to equal the query.substring method with the parameters 0, the value of
                                                                                                        //the query.length method -1
		;                                                                                               // semicolon
		
		// Check search length, must have 3 characters                                                  //comment line
		if(query.length < 3){                                                                           //if statement with the argument the the value of the method query.length must be less than 3
			alert("Your search query is too small, try again.);                                        // syntax error - this line is suppose to alert "Your search query is too small, try again." if there are less than three characters input by user
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)                                                    //comment line
			searchInput.focus();                                                                       //this line focuses the search using the method searchInput.focus
			return;                                                                                    //this line end the loop
		};                                                                                                  //semi colon finishes the if statement
		
		search(query);                                                                                  //calling the search method with the parameter of the query
	};                                                                                                  //curly brace and semicolon

	// Finds search matches                                                                          //comment line
	var search = function(query)                                                                        // declaring the varible search to equal the value of function
		
		// split the user's search query string into an array                                        //comment line
		var queryArray = query.join(" ");                                                               //declaring the variable queryArray to equal the value of the method query.join("")
		
		// array to store matched results from database.js                                           //comment line
		var results = [];                                                                               //declaring the variable results to equal an array

		// loop through each index of db array                                                        //comment line
		for(var i=0, j=db.length; i<j; i++){                                                           // for loop that states that variable i =0, variable j = db.length, and if i is < j, i should increment
		
			// each db[i] is a single video item, each title ends with a pipe "|"                     //comment line
			// save a lowercase variable of the video title                                           //comment line
			var dbTitleEnd = db[i].indexOf('|');                                                        //declaring the variable dbTitleEnd to equal db[i].indexOf('|');  (database query)
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);                                      //declaring the variable dbitem to equal db[i].tolowercase().substring(0, dbTitleEnd);  (database query)
			
			// loop through the user's search query words                                             //comment line
			// save a lowercase variable of the search keyword                                        //comment line
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){                                           // this line states that the variable ii equals 0, variable jj = quearyArray.length and ii<jj and ii gets incremented
				var qitem = queryArray[ii].tolowercase();                                               //declaring the variable qitem to equal queryArray[ii].tolowercase();
				
				// is the keyword anywhere in the video title?                                         //comment line
				// If a match is found, push full db[i] into results array                             //comment line
				var compare = dbitem.indexOf(qitem);                                                        //declaring the variable compare to equal the dbitem.indexOf(qitem);
				if(compare !== -1){                                                                     // if statement that states that if compare does not equal -1
					results.push(db[i]);                                                                //then the results.push function is called with parameters
				};                                                                                      //curly brace and semicolon
			;                                                                                               //semicolon
		;                                                                                                   //semicolon
		
		results.sort();                                                                                 //calling the results.sort function
		
		// Check that matches were found, and run output functions                                      //comment line
		if(results.length = 0){                                                                             //if else statement that says that if the result.length method equals 0
			noMatch();                                                                                      //uninitialized variable with no value
		}else{                                                                                                  // else part of the if else statement
			showMatches(results);                                                                               //uninitialized variable with the value of the variable results
		};                                                                                                  //curly brace and semicolon
	};                                                                                                          //curly brace and semicolon
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)                     //comment line
	var noMatch = function(){                                                                               //declaring the variable
		var html = ''+                                                                                      //declaring a redundant variable
			'<p>No Results found.</p>'+                                                                         //html tags
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'                     //html tags
		;                                                                                                   //semicolon
		resultsDIV.innerHTML = html;                                                                                //this line sets the results of the method resultsDIV.innerHTML to equal the variable html
	};                                                                                                          //curly brace and semicolon
	
	// Put matches into page as paragraphs with anchors                                                       //comment line
	var showMatches = function(results){                                                                        //declaring the variable showMatches to equal function(results)
		
		// THE NEXT 4 LINES ARE CORRECT.                                                                       //comment line
		var html = '<p>Results</p>',                                                                           //declaring the variable html to equal HTML tags
			title,                                                                                              //variable title
			url                                                                                                 //variable url
		;                                                                                                       //semicolon
		
		// loop through all the results search() function                                                      //comment line
		for(var i=0, j=results.length; i<j; i++){                                                               //for loop that give the argument var i=0, j=results.length; i<j; i++
		
			// title of video ends with pipe                                                                   //comment line
			// pull the title's string using index numbers                                                     //comment line
			titleEnd = results[i].indexOf('|');                                                                 // variable titleEnd equals the results array value i
			title = results[i].subString(0, titleEnd);                                                              //this pulls the title of the video
			
			// pull the video url after the title                                                               //comment line
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);                               //this shows the length of the video
			
			// make the video link - THE NEXT LINE IS CORRECT.                                                  //comment line
			html += '<p><a href=' + url + '>' + title + '</a></p>';                                                 //this shows the link to the video
		};                                                                                                          //curly brace and semicolon
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.                                                       //this line shows the value from the variable html
	};                                                                                                              //curly brace and semicolon
	
	// The onsubmit event will be reviewed in upcoming Course Material.                                          //comment line
	// THE LINE DIRECTLY BELOW IS CORRECT                                                                        //comment line
	document.forms[0].onsubmit = function(){                                                                        //shows the document form in the array when the submit button is pushed
		var query = searchInput.value;                                                                              //declaring the variable query to equal the value of the searchInput.value method
		validqte(query);                                                                                            //giving the parameter query to the variable validqte

        // return false is needed for most events - this will be reviewed in upcoming course material             //comment line
        // THE LINE DIRECTLY BELOW IS CORRECT                                                                     //comment line
		return false;                                                                                               //this line prevents default action
	;                                                                                                               //semicolon

})();                                                                                                                       //curly brace three parenthesis and semicolon - a lot of extra stuff here