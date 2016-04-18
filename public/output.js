exports = module.exports = function(){return [
    {
        "title": "albumland",
        "hidden": true
    },
    {
        "title": "Algos",
        "hidden": true
    },
    {
        "title": "arch-design",
        "hidden": false,
        "html": "<div class=\"announce instapaper_body md\" data-path=\"README.md\" id=\"readme\"><article class=\"markdown-body entry-content\" itemprop=\"text\"><h1><a id=\"user-content-arch-design\" class=\"anchor\" href=\"#arch-design\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>arch-design</h1>\n\n<p>showcase for architecture projects <a href=\"https://arch-design.herokuapp.com/\">https://arch-design.herokuapp.com/</a></p>\n\n<h1><a id=\"user-content-takeaways\" class=\"anchor\" href=\"#takeaways\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>Takeaways</h1>\n\n<p>[roll-thunder]</p>\n\n<ul>\n<li><p>Vanilla JS loading screen</p>\n\n<pre><code>  // Disable animations/transitions and keep a is-loading circle until everything's loaded.\n      $body.classList.add('is-loading');\n\n      window.addEventListener('load', function() {\n          window.setTimeout(function() {\n              $body.classList.remove('is-loading');\n          }, 100);\n      });\n\n</code></pre></li>\n<li><p>using CSS transitions to animate:</p>\n\n<pre><code>  el.style.opacity = 0; //no need for timer, use:\n\n      -moz-transition: all 0.25s ease-in-out;\n      -webkit-transition: all 0.25s ease-in-out;\n      -ms-transition: all 0.25s ease-in-out;\n      transition: all 0.25s ease-in-out;\n</code></pre></li>\n<li><p>Vanilla JS 'prependChild'</p>\n\n<pre><code>                  $wrapper.appendChild($bg);\n                $body.insertBefore($wrapper, $body.firstChild);  //works like prepend\n</code></pre></li>\n<li><p>Vanilla JS Mousewheel events and CSS Transforms</p>\n\n<pre><code>if (document.body.addEventListener) {\n  // IE9, Chrome, Safari, Opera\n  document.body.addEventListener(\"mousewheel\", MouseWheelHandler, false);\n  // Firefox\n  document.body.addEventListener(\"DOMMouseScroll\", MouseWheelHandler, false);\n}\nfunction MouseWheelHandler(e, delta) {\n\n  // cross-browser wheel delta\n  var e = window.event || e; // old IE support\n  var delta = 0;\n  if (e.wheelDelta) {\n      delta = e.wheelDelta/120; \n  } else if (e.detail) {\n      delta = -e.detail/3;\n  }\n  if (delta)\n      handle(delta);\n      if (e.preventDefault)\n              e.preventDefault();\n      e.returnValue = false;\n\n}\n\nfunction handle(delta) {\nif (delta &gt; 0){\n        miscDivPosition = 0;\n}\nelse{\n        miscDivPosition = -150;\n}\nmisc.style.webkitTransform = 'translateY('+miscDivPosition+'%)'; \nmisc.style.mozTransform    = 'translateY('+miscDivPosition+'%)'; \nmisc.style.transform       = 'translateY('+miscDivPosition+'%)'; \n}\n</code></pre></li>\n</ul>\n\n<p>[sf-village]</p>\n\n<ul>\n<li><p>Chaining animations via JQuery (Logo, logo scale, and show bg)</p>\n\n<pre><code>      $(\"#logo\").animate({opacity: 1}).delay(2000).promise().always(function(){\n          $(\"#logo\").animate({top: 0, width: '200px', height: '100px'}).delay(200).promise().always(function(){\n              $(\"#white-cover\").animate({opacity: 0})\n          })\n      })\n</code></pre>\n\n<p>[sf-res]</p></li>\n</ul>\n\n<ul>\n<li><p>A \"Close everything else\" Animation</p>\n\n<pre><code>  $menu_condense: function(menu_item){\n          //slide non-selected\n          _.menuThumbs.filter(function(item){\n              return item !== _.menuThumbs[_.menuOptions.indexOf(menu_item)];\n          }).forEach(function(element){\n              $(element).animate({ opacity: 0 }).promise().always(function(){\n                  //after fade thumbnails out, slide parent up\n                  $(element).parent().slideUp('fast');\n              });;\n          })\n  }\n</code></pre></li>\n</ul>\n</article></div>"
    },
    {
        "title": "basic-login-bar",
        "hidden": true
    },
    {
        "title": "basic-login-bar-spa",
        "hidden": true
    },
    {
        "title": "Boilerplates",
        "hidden": true
    },
    {
        "title": "bookmon",
        "hidden": true
    },
    {
        "title": "bootstrap-map-js",
        "hidden": true
    },
    {
        "title": "brackets-bootstrap3-snippets",
        "hidden": true
    },
    {
        "title": "calculator",
        "hidden": false,
        "html": "<div class=\"announce instapaper_body md\" data-path=\"README.md\" id=\"readme\"><article class=\"markdown-body entry-content\" itemprop=\"text\"><h1><a id=\"user-content-calculator\" class=\"anchor\" href=\"#calculator\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>calculator</h1>\n\n<h1><a id=\"user-content-takeaways\" class=\"anchor\" href=\"#takeaways\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>Takeaways</h1>\n\n<ul>\n<li>CSS -&gt; __% vs __px rounded borders.</li>\n<li>CSS -&gt; Blinking Cursor</li>\n</ul>\n\n<pre><code>.blinking {\n      animation: blink 1s steps(5, start) infinite;\n      -webkit-animation: blink 1s steps(5, start) infinite;\n}\n    @keyframes blink {\n      to {\n        visibility: hidden;\n      }\n    }\n    @-webkit-keyframes blink {\n      to {\n        visibility: hidden;\n      }\n    }\n</code></pre>\n\n<ul>\n<li>Math Evaluation Plugin - Parser.js</li>\n<li>Regex to manipulate input Expression via buttons.</li>\n</ul>\n</article></div>"
    },
    {
        "title": "cartodb-pluto",
        "hidden": true
    },
    {
        "title": "clementinejs-fcc",
        "hidden": true
    },
    {
        "title": "CodeRefresh",
        "hidden": true
    },
    {
        "title": "crelly-slider",
        "hidden": true
    },
    {
        "title": "dragDrop",
        "hidden": true
    },
    {
        "title": "EnglishTranslation",
        "hidden": true
    },
    {
        "title": "filescanner",
        "hidden": false,
        "html": "<div class=\"announce instapaper_body md\" data-path=\"README.md\" id=\"readme\"><article class=\"markdown-body entry-content\" itemprop=\"text\"><h1><a id=\"user-content-filescanner\" class=\"anchor\" href=\"#filescanner\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>filescanner</h1>\n\n<p>Client uploads a file, Server tells client its filesize.</p>\n\n<h1><a id=\"user-content-takeaways\" class=\"anchor\" href=\"#takeaways\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>Takeaways</h1>\n\n<ul>\n<li>How to use <code>multer</code> to upload a file temporarily to server.</li>\n</ul>\n</article></div>"
    },
    {
        "title": "firstmap",
        "hidden": true
    },
    {
        "title": "firstmocha",
        "hidden": true
    },
    {
        "title": "flux-angular",
        "hidden": true
    },
    {
        "title": "goojs",
        "hidden": true
    },
    {
        "title": "hackathon-starter",
        "hidden": true
    },
    {
        "title": "headerparser",
        "hidden": false,
        "html": "<div class=\"announce instapaper_body md\" data-path=\"README.md\" id=\"readme\"><article class=\"markdown-body entry-content\" itemprop=\"text\"><h1><a id=\"user-content-headerparser\" class=\"anchor\" href=\"#headerparser\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>headerparser</h1>\n\n<p>Client posts a preset url, recieves header data from Server and shows it</p>\n</article></div>"
    },
    {
        "title": "httpGet",
        "hidden": true
    },
    {
        "title": "ign",
        "hidden": true
    },
    {
        "title": "imgsearcher",
        "hidden": false,
        "html": "<div class=\"announce instapaper_body md\" data-path=\"README.md\" id=\"readme\"><article class=\"markdown-body entry-content\" itemprop=\"text\"><h1><a id=\"user-content-imgsearcher\" class=\"anchor\" href=\"#imgsearcher\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>imgsearcher</h1>\n\n<p>Client sends keyword, Server performs Bing Search on behalf of Client and returns to Client the results.</p>\n\n<h1><a id=\"user-content-takeaways\" class=\"anchor\" href=\"#takeaways\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>Takeaways</h1>\n\n<ul>\n<li>CSS =&gt; Using flexbox to display results in gallery format</li>\n<li>How to use Bing API with pages and all.</li>\n<li>Storing recent searches in a server side variable.</li>\n<li>How to use a Promise with 'Q'. respond for GET and POST request after Promise is resolved</li>\n</ul>\n\n<pre><code>    var deferred = Q.defer();\n    request.get(url, {auth: { user: key, password: key} }, function (error, result) {\n             deferred.resolve(result.body);\n    })\n\n    deferred.promise.then(function (value) {\n        value = JSON.parse(value);\n        var arr = value.d.results;\n        res.send(arr.slice(0,10));\n    });\n</code></pre>\n</article></div>"
    },
    {
        "title": "iomrascalai",
        "hidden": true
    },
    {
        "title": "javascript-koans",
        "hidden": true
    },
    {
        "title": "js-expression-eval",
        "hidden": true
    },
    {
        "title": "js_designpatterns",
        "hidden": true
    },
    {
        "title": "LandingPage",
        "hidden": true
    },
    {
        "title": "leaflet.workspace",
        "hidden": true
    },
    {
        "title": "loginV1",
        "hidden": true
    },
    {
        "title": "loginV2",
        "hidden": true
    },
    {
        "title": "loginV3",
        "hidden": true
    },
    {
        "title": "loginV4",
        "hidden": true
    },
    {
        "title": "masteringnode",
        "hidden": true
    },
    {
        "title": "MEAN-basic",
        "hidden": false,
        "html": "<div class=\"announce instapaper_body md\" data-path=\"README.md\" id=\"readme\"><article class=\"markdown-body entry-content\" itemprop=\"text\"><h1><a id=\"user-content-mean-basic\" class=\"anchor\" href=\"#mean-basic\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>MEAN-basic</h1>\n\n<h1><a id=\"user-content-takeaways\" class=\"anchor\" href=\"#takeaways\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>Takeaways</h1>\n\n<ul>\n<li>**This app uses client-side Angular ui.Router (NOT NgRoute) to control controllers and views.</li>\n</ul>\n\n<pre><code>          == angularApp.js (clientside JS, angular route) ==\n app.config([\n'$stateProvider',\n'$urlRouterProvider',\nfunction($stateProvider, $urlRouterProvider) {\n\n  $stateProvider\n    .state('home', {\n      url: '/home',\n      templateUrl: '/home.html',\n      controller: 'MainCtrl',\n      resolve: {\n        postPromise: ['posts', function(posts){\n          return posts.getAll();\n        }]\n      }\n    })\n    .state('posts', {\n      url: '/posts/{id}',\n      templateUrl: '/posts.html',\n      controller: 'PostsCtrl',\n      resolve: {\n        post: ['$stateParams', 'posts', function($stateParams, posts) {\n          return posts.get($stateParams.id);\n        }]\n      }\n    });\n\n</code></pre>\n\n<ul>\n<li>use of MongoDB's <code>.populate</code> to get <code>post.comments</code></li>\n</ul>\n\n<pre><code>    === HTML Template ===\n\n    &lt;script type=\"text/ng-template\" id=\"/posts.html\"&gt;\n      &lt;div class=\"page-header\"&gt;\n        &lt;h3&gt;\n          &lt;a ng-show=\"post.link\" href=\"{{post.link}}\"&gt;\n            {{post.title}}\n          &lt;/a&gt;\n          &lt;span ng-hide=\"post.link\"&gt;\n            {{post.title}}\n          &lt;/span&gt;\n        &lt;/h3&gt;\n      &lt;/div&gt;\n\n      &lt;div ng-repeat=\"comment in post.comments | orderBy:'-upvotes'\"&gt;\n        &lt;span class=\"glyphicon glyphicon-thumbs-up\"\n          ng-click=\"incrementUpvotes(comment)\"&gt;&lt;/span&gt;\n        {{comment.upvotes}} - by {{comment.author}}\n        &lt;span style=\"font-size:20px; margin-left:10px;\"&gt;\n          {{comment.body}}\n        &lt;/span&gt;\n      &lt;/div&gt;\n          &lt;!-- post template --&gt;\n\n      &lt;form ng-submit=\"addComment()\"\n        style=\"margin-top:30px;\"&gt;\n        &lt;h3&gt;Add a new comment&lt;/h3&gt;\n\n        &lt;div class=\"form-group\"&gt;\n          &lt;input type=\"text\"\n          class=\"form-control\"\n          placeholder=\"Comment\"\n          ng-model=\"body\"&gt;&lt;/input&gt;\n        &lt;/div&gt;\n        &lt;button type=\"submit\" class=\"btn btn-primary\"&gt;Post&lt;/button&gt;\n      &lt;/form&gt;\n    &lt;/script&gt;\n\n         == angularApp.js (clientside JS, angular service) ==\n\n   o.get = function(id) {\n       return $http.get('/posts/' + id).then(function(res){\n        //return post with comments expanded\n         return res.data;\n       });\n     };\n\n\n         == index.js (routes file) ==\n/* GET post\n   Query auto-ran on router.param\n */\nrouter.get('/posts/:post', function (req, res) {\n    req.post.populate('comments', function(err, post) {\n        res.json(post);\n    });\n});\n</code></pre>\n\n<ul>\n<li>use <code>angular.copy(data, $scope.putDataHere)</code> instead of <code>$scope.putDataHere = data</code></li>\n</ul>\n\n<pre><code>         == angularApp.js (clientside JS, angular service) ==\n  var o = {\n    posts: []\n  };\n//get posts, run by $stateProvider resolve\n   o.getAll = function() {\n       return $http.get('/posts').success(function(data){\n         angular.copy(data, o.posts);\n       });\n     };\n\n     === HTML Template ===\n       &lt;div ng-repeat=\"post in posts ... (from service)\n</code></pre>\n\n<ul>\n<li><p>using express Router<code>.param</code> with <code>Model.findById(id)</code> instead if <code>req.params.(blah)</code>. app.param is depreciated in Express 4.11x -&gt;</p>\n\n<pre><code>       == index.js (routes file) ==\n/*------*/\n/* PARAM */\n/*------*/\n// Runs for all post related actions\nrouter.param('post', function (req, res, next, id) {\nvar query = Post.findById(id);\n\nquery.exec( function (err, post) {\n    if (err) { return next(err); }\n    if (!post) {\n        return next('Could not find post');\n    }\n\n    req.post = post;\n    return next();\n});\n});\n\n////Example use, note how we can use 'req.comment' in the PUT request.\n\n    == index.js (routes file) ==\nCLIENT\n\n//upvote comment\no.upvoteComment = function(post, comment) {\n   return $http.put('/posts/' + post._id + '/comments/'+ comment._id + '/upvote')\n     .success(function(data){\n       comment.upvotes += 1;\n     });\n };\n\nSERVER\n\n/* Upvote a comment */\nrouter.put('/posts/:post/comments/:comment/upvote', function (req, res, next) {\nreq.comment.upvote( function (err, comment) {\n    if (err) { return next(err); }\n    res.json(comment);\n});\n});\n</code></pre></li>\n<li><p>Methods in Model Objects, being triggered by POST requests.</p>\n\n<pre><code>      == index.js (routes file) ==\n      /* Upvote a comment */\n      router.put('/posts/:post/comments/:comment/upvote', function (req, res, next) {\n          req.comment.upvote( function (err, comment) {\n              if (err) { return next(err); }\n              res.json(comment);\n          });\n      });\n\n      == Comments.js ==\n      CommentSchema.methods.upvote = function(cb) {\n        this.upvotes += 1;\n        this.save(cb);\n      };\n</code></pre></li>\n<li><p>Relations in Model Objects and Default Settings</p>\n\n<pre><code> upvotes: {type: Number, default: 0},\npost: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }\n</code></pre></li>\n</ul>\n</article></div>"
    },
    {
        "title": "multifxvst",
        "hidden": true
    },
    {
        "title": "news-gallery",
        "hidden": true
    },
    {
        "title": "nightlifemap",
        "hidden": true
    },
    {
        "title": "notes",
        "hidden": true
    },
    {
        "title": "nrg.js",
        "hidden": true
    },
    {
        "title": "palace",
        "hidden": true
    },
    {
        "title": "playing-cards",
        "hidden": true
    },
    {
        "title": "polland",
        "hidden": false,
        "html": "<div class=\"announce instapaper_body md\" data-path=\"README.md\" id=\"readme\"><article class=\"markdown-body entry-content\" itemprop=\"text\"><h1><a id=\"user-content-polland\" class=\"anchor\" href=\"#polland\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>polland</h1>\n\n<h1><a id=\"user-content-takeaways\" class=\"anchor\" href=\"#takeaways\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>Takeaways</h1>\n\n<ul>\n<li>CSS/JS -&gt; Sidescrolling</li>\n</ul>\n\n<pre><code>// we're basically moving the div left and right with stops before everything moves too far left or right\n    $(function() {\n        var myPollsPosition = 0;\n        var otherPollsPosition = 0;\n       $(\".user-ctrl-bar\").mousewheel(function(event, delta) {\n           if(myPollsPosition + delta*100&lt;=0 &amp;&amp; myPollsPosition + delta*100&gt;= $(\".content\").outerWidth() - $(\"#myPolls\").outerWidth()-100){\n               myPollsPosition += (delta*100);\n               $(\"#myPolls\").css(\"transform\",\"translateX(\"+myPollsPosition+\"px)\")\n               console.log(myPollsPosition);\n              event.preventDefault();\n           }\n       });\n       $(\".polls-viewport\").mousewheel(function(event, delta) {\n           if(otherPollsPosition + delta*100&lt;=0 &amp;&amp; otherPollsPosition + delta*100&gt;= $(\".content\").outerWidth() - $(\"#otherPolls\").outerWidth()-100){\n               otherPollsPosition += (delta*100);\n               $(\"#otherPolls\").css(\"transform\",\"translateX(\"+otherPollsPosition+\"px)\")\n              event.preventDefault();\n           }\n       });\n    });\n</code></pre>\n\n<ul>\n<li>Using ng-init to send JS data from server to client</li>\n</ul>\n\n<pre><code>// .ejs file within HTML\ndata-ng-init=\"package = &lt;%= packagedUser %&gt;;autologUser(package)\"\n\n// route file\n        res.render('index.ejs', {\n            packagedUser : JSON.stringify(req.user)\n</code></pre>\n\n<ul>\n<li>Gotcha req.user vs author in relationship must be both toString() to compare. Because they are objects and must be deep compared.</li>\n<li>Chart.js -&gt; Creating, updating, deleting Charts</li>\n<li>Vanilla JS method of $(document).ready  <code>document.addEventListener(\"DOMContentLoaded\", function() {</code></li>\n<li>/public files directories are dependent on where the template .ejs file is</li>\n</ul>\n\n<pre><code>https://github.com/vtange/polland/commit/6d58224d4209c47b2bed76a8c625029e4bbade85\n</code></pre>\n\n<p>MongoDB</p>\n\n<ul>\n<li>initDB file to create mock polls and mock users</li>\n<li>Customizing/making new Models and interacting with them in MongoDB</li>\n<li><p><code>.find({})</code> and <code>.findOne({})</code> are async queries.</p></li>\n<li><p>Use <code>async</code> module to <code>.waterfall</code> connect async in serial fashion</p></li>\n</ul>\n</article></div>"
    },
    {
        "title": "pomodoro",
        "hidden": true
    },
    {
        "title": "Portfolio",
        "hidden": true
    },
    {
        "title": "Portfolio2",
        "hidden": true
    },
    {
        "title": "Portfolio3",
        "hidden": true
    },
    {
        "title": "react-first",
        "hidden": true
    },
    {
        "title": "react-shopcart",
        "hidden": true
    },
    {
        "title": "react-way-getting-started",
        "hidden": true
    },
    {
        "title": "really-basic-login-bar",
        "hidden": true
    },
    {
        "title": "rewrite-underscore-library",
        "hidden": true
    },
    {
        "title": "shapesmith.next",
        "hidden": true
    },
    {
        "title": "showcase-maps",
        "hidden": true
    },
    {
        "title": "simon",
        "hidden": false,
        "html": "<div class=\"announce instapaper_body md\" data-path=\"README.md\" id=\"readme\"><article class=\"markdown-body entry-content\" itemprop=\"text\"><h1><a id=\"user-content-simon\" class=\"anchor\" href=\"#simon\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>simon</h1>\n\n<h1><a id=\"user-content-takeaways\" class=\"anchor\" href=\"#takeaways\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>Takeaways</h1>\n\n<p>CSS:</p>\n\n<ul>\n<li><p>ng-class to smooth darken background when power is on. (Using opacity on black) (Orig. used in TOS Mapdex)</p>\n\n<pre><code>&lt;div id=\"darkness\" class=\"disappear\" data-ng-class=\"{'disappear': !power, 'appear': power}\"&gt;&lt;/div&gt;\n</code></pre></li>\n<li><p>using box-shadow to tint a div which already has a background image.</p>\n\n<pre><code>input.color = \"0px 340px rgba(255, 0, 80, 0.3) inset\"\nSEE BELOW for \"input.color\"\n</code></pre></li>\n<li>Circular glow button, iPhone-style switch</li>\n<li>TM symbol and happy/frowny faces.</li>\n</ul>\n\n<p>JS:</p>\n\n<ul>\n<li><p>ng-style use with JSON for generating and animating Xylophone bars:</p>\n\n<pre><code>  $scope.set_styling = function (input) {\n      if (input.playing) {\n          return { \"height\": input.length, \"box-shadow\": input.color }\n      }\n      else{\n      return { \"height\": input.length }\n      };\n</code></pre>\n\n<ul>\n<li>using a box-shadow on an overlayed div to give glow effect. (Used on \"Pip Holder\" elements that align pips)</li>\n</ul>\n\n<pre><code>  $scope.backlight = function (input) {\n      if (input.playing) {\n          return { \"box-shadow\": input.light }\n      }\n      else{\n      return {  }\n      };\n</code></pre></li>\n<li>Sequence:\n<code>\nUp Number -&gt; Play Demo -&gt; Listen -&gt; :), Up Number...\n                                -&gt; :(, Repeat\n</code></li>\n<li>Block User Action with a <div> that only disappears during Listen Phase.\n<code>\n  &lt;div id=\"click-block\" data-ng-if=\"!listening\"&gt;&lt;/div&gt;\n</code></div></li>\n<li><p>ng-mousedown, mouseup, mouseenter: (Used in Guide-showing, hold down for long glow aesthetic)</p>\n\n<pre><code>data-ng-mouseenter=\"ShowGuide(bar)\" data-ng-mousedown=\"Play(bar)\" data-ng-mouseleave=\"UnPlay(bar);ShowGuide(bar)\" data-ng-mouseup=\"UnPlay(bar)\"\n</code></pre>\n\n<p>TODO</p></li>\n</ul>\n\n<p>would like to find a way to find and cancel all pending timeouts. \nmaybe use a array of timeouts and assign each timeout to that array?</p>\n\n<p><strike>Also find a way to preload sounds so they don't lag the first time they're played</strike> Preloading sounds does not solve this problem, but this is how you do it.</p>\n\n<pre><code>    var sounds = [];//preload sounds\n    for (var k=0;k&lt;$scope.instrum.xyphone.length;k++){sounds.push(new Audio($scope.instrum.xyphone[k].tune))};//preload sounds\n    // and then play them off of sounds array\n</code></pre>\n</article></div>"
    },
    {
        "title": "stockcandler",
        "hidden": true
    },
    {
        "title": "test-first-ruby",
        "hidden": true
    },
    {
        "title": "tictactoe",
        "hidden": false,
        "html": "<div class=\"announce instapaper_body md\" data-path=\"README.md\" id=\"readme\"><article class=\"markdown-body entry-content\" itemprop=\"text\"><h1><a id=\"user-content-tictactoe\" class=\"anchor\" href=\"#tictactoe\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>tictactoe</h1>\n\n<h1><a id=\"user-content-takeaways\" class=\"anchor\" href=\"#takeaways\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>Takeaways</h1>\n\n<ul>\n<li>ngAlertify, ngAnimate</li>\n<li>CSS X's and O's, 'checkClickable' function, ng-animate class</li>\n<li><p>2 Player Turn based structure:</p>\n\n<pre><code>Player Move -&gt; Check Victory -&gt; Computer Think -&gt; Computer Move -&gt; Check Victory -&gt; Player Move\n</code></pre>\n\n<ul>\n<li> Used \"Victory Conditions\" for AI to plan next move and to check victory, \"Strategic Bias\" for AI to make powerful moves before going random.</li>\n</ul>\n\n<pre><code>      var strategicBias = [5,2,3,6,9];//computer bias, do these before random number\n      var victoryConditions = [[1,2,3],[4,5,6],[7,8,9],[9,6,3],[8,5,2],[7,4,1],[1,5,9],[7,5,3]];\n      ...\n      (victoryConditions[i].every(function (val) { return $scope.Xed.indexOf(val) &gt;= 0; }) == true){//find one array in victoryconditions where Xed fills all numbers\n</code></pre></li>\n</ul>\n</article></div>"
    },
    {
        "title": "timestamper",
        "hidden": true,
        "html": "<div class=\"announce instapaper_body md\" data-path=\"README.md\" id=\"readme\"><article class=\"markdown-body entry-content\" itemprop=\"text\"><h1><a id=\"user-content-timestamper\" class=\"anchor\" href=\"#timestamper\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>timestamper</h1>\n\n<p>Client sends time as a string, Server processes and sends back time JSON</p>\n</article></div>"
    },
    {
        "title": "TreeOfSaviorFormatter",
        "hidden": false,
        "html": "<div class=\"announce instapaper_body md\" data-path=\"README.md\" id=\"readme\"><article class=\"markdown-body entry-content\" itemprop=\"text\"><h1><a id=\"user-content-treeofsaviorformatter\" class=\"anchor\" href=\"#treeofsaviorformatter\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>TreeOfSaviorFormatter</h1>\n\n<h1><a id=\"user-content-takeaways\" class=\"anchor\" href=\"#takeaways\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>Takeaways</h1>\n\n<ul>\n<li>Basic Angular ng-Repeat method will not work in this. Too many watchers created, even with optimizations such as <code>track by $index</code> (Angular method used <code>$scope.apply</code> to register changes in Array made by drag-n-drop/jQuery upload.)</li>\n<li>Use of <code>flowtype.js</code> to make scaleable font for the game-font rendering.</li>\n<li>Use of <code>autosize.js</code> to autosize <code>&lt;textarea&gt;</code> elements to avoid overflow.</li>\n<li>Use of <code>fuzzyset.js</code> for fuzzy searching and close comparison of strings.</li>\n<li><p>Use <code>$sce.trustAsHtml</code> to grab rendered text from webpage into Angular and display it with HTML such as <code>&lt;brs&gt;</code></p>\n\n<pre><code>$scope.renderDialog = function(line){\n    line = linePreRender(line);\n    line = line.replace(/([\\w\\s\\d-+;|,.!&amp;'\"\\?]{120})/g, '$1&lt;br&gt;')       //break every 120\n    line = line.replace(/([\\w\\s\\d-+;|,.!&amp;'\"\\?]{90})/g, '$1&lt;br&gt;')        //now break again every 90\n    line = $sce.trustAsHtml(line);                                      // required to ng-bind to index.html -&gt; security check for txt-block\n    return line;\n};\n</code></pre></li>\n</ul>\n\n<ul>\n<li>jQuery-generated Table. Use <code>$compile</code> to append ng-blah's to Angular.</li>\n<li>Gotcha: One column tables don't need <code>&lt;td&gt;</code>'s, but 2+ do.</li>\n<li>Gotcha: Always use an object and direct ng-models to a property of that object.</li>\n<li>Regex: file extension check, and remove QUEST_blah and possible {memo X}, replace {nl} with HTML <code>&lt;br&gt;</code></li>\n<li>Replace table cell content with <code>&lt;textarea&gt;</code> when selected, add green glow (CSS <code>!important</code> used)</li>\n<li>New <code>&lt;textarea&gt;</code>'s are <code>$compile</code>d to an <code>$scope.new()</code>-&gt;\"EditingScope\" and <code>$destroy</code>ed when deselected.</li>\n</ul>\n\n<pre><code>var textarea = $('&lt;textarea id=\"'+$scope.selectedCell+'\" data-ng-model=\"selectedLine.text\"&gt;&lt;/textarea&gt;');\nEditingScope.$destroy();            //remove old textarea scope\nEditingScope = $scope.$new();           //generate new textarea scope\n$compile(textarea)(EditingScope);       //make connections\n$(\"#\"+$scope.selectedCell).append(textarea);    //append the new html\n</code></pre>\n\n<ul>\n<li>Keep track of what HTML element is selected via its HTML id.</li>\n</ul>\n\n<pre><code>$scope.selectedCell = event.target.id;\n</code></pre>\n\n<ul>\n<li><p>CSS add green glow</p>\n\n<pre><code>            //glowing textarea phase\n                if ($scope.selectedCell){\n                    $(\"#\"+$lastClicked).removeClass(\"selected-line\");\n                    $(\"#\"+$lastClicked).html($scope.selectedLine.text);// or selectedArr[$scope.selectedIndex][$scope.selectedProp]\n                    if(nlMode === true){\n                        $scope.nlCheck($scope.selectedLine.text, $scope.selectedIndex);\n                    }\n                }\n                $scope.selectedCell = event.target.id;\n                $(\"#\"+$scope.selectedCell).removeClass(\"nl-mark\");\n                $(\"#\"+$scope.selectedCell).addClass(\"selected-line\");\n                $(\"#\"+$scope.selectedCell).html('');\n</code></pre>\n\n<ul>\n<li>Export as .txt function as <code>$scope.export</code></li>\n</ul></li>\n</ul>\n</article></div>"
    },
    {
        "title": "TreeOfSaviorMapdex",
        "hidden": false,
        "html": "<div class=\"announce instapaper_body md\" data-path=\"README.md\" id=\"readme\"><article class=\"markdown-body entry-content\" itemprop=\"text\"><h1><a id=\"user-content-tree-of-savior-monster-map\" class=\"anchor\" href=\"#tree-of-savior-monster-map\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>Tree Of Savior Monster Map</h1>\n\n<p>A map with monster data inputed in. Made to help orient the Tree of Savior Translation group on What monsters are found where.</p>\n\n<p>This was my first app. Very crude and disorganized code. 'Monstall' isn't even proper JSON. A lot of repeat angularized HTML.</p>\n\n<h1><a id=\"user-content-major-takeaways\" class=\"anchor\" href=\"#major-takeaways\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>Major Takeaways:</h1>\n\n<p>CSS:</p>\n\n<ol>\n<li>Toggling buttons and tabs -&gt; stay lit up without outlines, etc.</li>\n<li>\"X\" for closing pseudoelement (first use) </li>\n</ol>\n\n<p>JS:</p>\n\n<ol>\n<li>Loading JSON Data via HTML</li>\n<li>Tabs, floors, selected zone control.</li>\n<li>Use of Angular Filters to filter Ng-Repeat</li>\n<li>Use of Ng-Switch for picture/icon handling</li>\n<li>Used MonsterDB.monstall.indexOf(monster) instead of $index to track monsters due to issues with non-sequential lists.</li>\n<li>Vertical Delete Button</li>\n</ol>\n\n<p>EDIT MODE</p>\n\n<ol>\n<li>Use of a transparent, Full-screen DIV layer to block clicks outside edited object</li>\n<li>Use of <code>angular.copy($scope.MonsterDB.monstall[index], $scope.editedItem);</code>\n\n<ul>\n<li>copy original to form-controlled 'editedItem' to edit.</li>\n<li>reverse to save -&gt; <code>angular.copy($scope.editedItem, $scope.MonsterDB.monstall[index]);</code></li>\n</ul></li>\n</ol>\n\n<p>SEARCH MODE</p>\n\n<ol>\n<li>Move info from Controller to Controller via Service</li>\n<li>Angular Filter Array of Objects by 'searched for' object. Basic Name search and attribute searching.</li>\n</ol>\n\n<p>HINDSIGHT:</p>\n\n<ol>\n<li>Used a JSON for Map Data</li>\n<li>More ng-repeat to avoid repeated HTML elements.</li>\n<li>Split Controllers, or just do it in one controller and not have to use a service.</li>\n</ol>\n</article></div>"
    },
    {
        "title": "turf",
        "hidden": true
    },
    {
        "title": "twitch",
        "hidden": false,
        "html": "<div class=\"announce instapaper_body md\" data-path=\"README.md\" id=\"readme\"><article class=\"markdown-body entry-content\" itemprop=\"text\"><h1><a id=\"user-content-twitch\" class=\"anchor\" href=\"#twitch\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>twitch</h1>\n\n<h1><a id=\"user-content-takeaways\" class=\"anchor\" href=\"#takeaways\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>Takeaways</h1>\n\n<ul>\n<li>CSS -&gt; Tabs within Boundaries</li>\n<li><p>CSS -&gt; Line Height and floats for <code>[Avatar] Username     [status]</code></p></li>\n<li><p>filtering upon ng-repeat</p>\n\n<pre><code>data-ng-repeat=\"user in storage.combinedUsers | filter:sera\" -&gt; 'sera' = ng-model for name search.\n</code></pre>\n\n<pre><code>data-ng-repeat=\"user in offlineUsers = (storage.combinedUsers | offline)\n</code></pre></li>\n</ul>\n\n<ul>\n<li><p>2x API Search for User info and User Status. -&gt; merged \"User info\" and \"User status\" via 'extend' function.</p>\n\n<pre><code>//courtesy https://plainjs.com/javascript/utilities/merge-two-javascript-objects-19/\nfunction extend(obj, src) {\nfor (var key in src) {\n    if (src.hasOwnProperty(key)) obj[key] = src[key];\n}\nreturn obj;\n}\n...\n        $http.jsonp(baseUrl + profileExt + users[i] + \"?callback=JSON_CALLBACK\").success(function(data1) {//pull profile info\n          $http.jsonp(baseUrl + statusExt + data1.name + \"?callback=JSON_CALLBACK\").success(function(data2) {//then pull status info\n             storage.combinedUsers.push(extend(data1,data2)); \n..\n</code></pre></li>\n</ul>\n</article></div>"
    },
    {
        "title": "txtUpload",
        "hidden": true
    },
    {
        "title": "urlshortener",
        "hidden": false,
        "html": "<div class=\"announce instapaper_body md\" data-path=\"README.md\" id=\"readme\"><article class=\"markdown-body entry-content\" itemprop=\"text\"><h1><a id=\"user-content-urlshortener\" class=\"anchor\" href=\"#urlshortener\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>urlshortener</h1>\n\n<p>Client sends a url, Server encodes it and gives a encoded URL</p>\n\n<h1><a id=\"user-content-takeaways\" class=\"anchor\" href=\"#takeaways\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z\"></path></svg></a>Takeaways</h1>\n\n<ul>\n<li>Using <code>hashid</code> plugin with strings by converting strings to array of charCodes.</li>\n<li>Lots of url play</li>\n</ul>\n</article></div>"
    },
    {
        "title": "vst-io",
        "hidden": true
    },
    {
        "title": "waifu2x",
        "hidden": true
    },
    {
        "title": "weather",
        "hidden": true
    },
    {
        "title": "wikisearch",
        "hidden": true
    },
    {
        "title": "wintersmith-practice",
        "hidden": true
    }
]}