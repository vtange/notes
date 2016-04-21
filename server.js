var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser   = require('body-parser');
var request = require('request');
var fs = require('fs');
var q = require('q');
var port     = process.env.PORT || 8080;
var app     = express();
//var cheerio = require('cheerio');
var stuff   = require('./public/output.js')();
var auth	= require('./config/auth.js');
var showdown  = require('showdown'),
    converter = new showdown.Converter()

app.use(bodyParser.urlencoded({ extended: false }));    // parse application/x-www-form-urlencoded
app.use(bodyParser.json());    // parse application/json

// set up client files
var hbs = exphbs.create({
    defaultLayout: 'main.hbs',
	extname: '.hbs',
    helpers: {
		marked: function(text){
			return new hbs.handlebars.SafeString(converter.makeHtml(text));
		}
    }
});
app.engine('hbs', hbs.engine);												//set handlebars engine
app.set('view engine', 'hbs');												//use handlebars
app.use(express.static(__dirname + '/public'));     // set the static files location /public/img will be /img for users

Array.prototype.getFirstIndexThat = function(test) {

    for(var i = 0; i < this.length; i++)
    {
        if (test(this[i])){
			return i;
		}
    }
	return null;
}

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
			data: stuff
			//custom layout:
			//layout: 'main.hbs'
		});
}
//gets readme info
function getREADME(repo_name, promise){
		var getProject = {
		  uri: 'https://api.github.com/repos/vtange/'+repo_name+'/readme',
		  formData: auth,
		  headers: {
			'User-Agent': 'vtange notes app - note collector',
			'Accept': 'application/vnd.github.html'
		  }
		};
		if(repo_name){
			request(getProject, function(error, response, body){
				if(!error){
					promise.resolve(body);
				}//end if(!error)
				else{
					promise.reject(null);
				}
			});//end request for data
		}
		else{
			throw 'req.body.repo is falsey';
		}
}
//add new repo
app.post('/add', function(req, res){
	if(req.body.repo){
		var index = stuff.getFirstIndexThat(function(repo){
			return repo.title === req.body.repo;
		});
		if(index){
			send(res);
		}
		else{
			var gotReadme = q.defer();
			getREADME(req.body.repo, gotReadme);
			gotReadme.promise.then(function(html){
				var obj = {
					title:req.body.repo,
					hidden:false,
					html:html
				}
				stuff.push(obj);
			});
		}
	}
});
//show / hide one
app.post('/transfer', function(req, res){
	if(req.body.repo){
		var index = stuff.getFirstIndexThat(function(repo){
			return repo.title === req.body.repo;
		});
		if(!stuff[index].html){
			var gotReadme = q.defer();
			getREADME(req.body.repo, gotReadme);
			gotReadme.promise.then(function(html){
				stuff[index].html = html;
				stuff[index].hidden = stuff[index].hidden === false? true: false;
				write(res);
			});
		}
		else{
			stuff[index].hidden = stuff[index].hidden === false? true: false;
			write(res);
		}
	}
});

//hide all button

//show all projects (with AngularJS)?

//auto README updater


// try auto-finding new repos
app.get("/auto", function(req, res){
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
			var arr = JSON.parse(body);
			arr.forEach(function(repo,index){
				if(stuff.every(function(existing_repo){
					return existing_repo.name !== repo.name;
				})){
					var obj = {
						title:repo.name,
						hidden:false
					}
					stuff.push(obj);
				}
				if(index+2>arr.length)
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