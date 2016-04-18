var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser   = require('body-parser');
var request = require('request');
var fs = require('fs');
var port     = process.env.PORT || 8080;
var app     = express();
//var cheerio = require('cheerio');
var stuff   = require('./public/output.js')();
var auth	= require('./config/auth.js');
var showdown  = require('showdown'),
    converter = new showdown.Converter()

app.use(bodyParser.urlencoded({ extended: false }));    // parse application/x-www-form-urlencoded
app.use(bodyParser.json());    // parse application/json

var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
		marked: function(text){
			return new hbs.handlebars.SafeString(converter.makeHtml(text));
		}
    }
});

// set up client files
app.set('view engine', 'hbs');												//use handlebars
app.engine('hbs', exphbs({defaultLayout: 'main.hbs', extname: '.hbs'}));		//'hbs' engine == exphbs, whose layoutpage is 'main', extension is 'hbs'
app.engine('hbs', hbs.engine);												//append helpers
app.use(express.static(__dirname + '/public'));     // set the static files location /public/img will be /img for users

function write(res){
		// To write to the system we will use the built in 'fs' library.
		// In this example we will pass 3 parameters to the writeFile function
		// Parameter 1 :  output.json - this is what the created filename will be called
		// Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
		// Parameter 3 :  callback function - a callback function to let us know the status of our function
		fs.writeFile('public/output.js', "exports = module.exports = function(){return "+JSON.stringify(stuff, null, 4)+"}", function(err){

			console.log('File successfully written! - Check your project directory for the output.json file');

		});

		//send data
		send(res);
}
function send(res){
		res.render('index', {
			data: stuff,
			layout: 'main.hbs'
		}); // load the index.hbs file
}
//updates information and send
app.post('/update', function(req, res){
		console.log(req.body);
		var getProject = {
		  uri: 'https://api.github.com/repos/vtange/'+req.body.repo+'/readme',
		  formData: auth,
		  headers: {
			'User-Agent': 'vtange notes app - note collector',
			'Accept': 'application/vnd.github.html'
		  }
		};
		if(req.body.repo){
			request(getProject, function(error, response, body){
				if(!error){
					var obj = {
						title:req.body.repo,
						html:body
					}
					stuff.push(obj);
					write(res);
				}//end if(!error)
			});//end request for data
		}
	else{
		throw 'req.body.repo is falsey';
	}

});

app.get("/reset", function(req, res){
	//formData == auth (new application at github/settings > OAuth applications)
	var getRepos = {
	  uri: 'https://api.github.com/users/vtange/repos?per_page=99',
	  formData: auth,
	  headers: {
		'User-Agent': 'vtange notes app - note collector'
	  }
	};
	request(getRepos, function(error, response, body){
		if(!error){
			stuff = [];
			var arr = JSON.parse(body);
			arr.forEach(function(repo,index){
				var obj = {
					title:repo.name
				}
				stuff.push(obj);
				if(!arr[index+1])
					write(res);
			});
		}//end if(!error)
	});//end request for data

});

//simply send information
app.get('/', function(req, res){
		//send data
		send(res);
});

app.listen(port);

console.log('Magic happens on port '+port);

exports = module.exports = app;