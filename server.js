var express = require('express');
var fs = require('fs');
var request = require('request');
//var cheerio = require('cheerio');
var port     = process.env.PORT || 8080;
var app     = express();
var stuff   = [];

function writeNSend(res){
		// To write to the system we will use the built in 'fs' library.
		// In this example we will pass 3 parameters to the writeFile function
		// Parameter 1 :  output.json - this is what the created filename will be called
		// Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
		// Parameter 3 :  callback function - a callback function to let us know the status of our function
		fs.writeFile('output.json', JSON.stringify(stuff, null, 4), function(err){

			console.log('File successfully written! - Check your project directory for the output.json file');

		});

		// Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
		res.send('Check your console!');
}

//updates information and send
app.get('/update', function(req, res){

	var getRepos = {
	  uri: 'https://api.github.com/users/vtange/repos?per_page=1000',
	  headers: {
		'User-Agent': 'vtange notes app - note collector'
	  }
	};

	request(getRepos, function(error, response, body){
		if(error){
			throw error;
		}
		var arr = JSON.parse(response.body);
		arr.forEach(function(repo, index){
			var getProject = {
			  uri: 'https://raw.githubusercontent.com/vtange/'+repo.name+'/master/README.md',
			  headers: {
				'User-Agent': 'vtange notes app - note collector'
			  }
			};

			request(getProject, function(error, response, body){
				if(!error){
					//var $ = cheerio.load(body); // enable jQuery-style scraping
					if(/takeaway/gi.test(body))
						stuff.push(body);
					if(!(arr[index+1])){
						writeNSend(res);
					}
				}//end if(!error)
			});//end request for data

		});//end forEach repo

    });//end request for repos
	
});

//simply send information
app.get('/', function(req, res){

	
});

app.listen(port);

console.log('Magic happens on port '+port);

exports = module.exports = app;