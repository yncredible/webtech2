#Webtechnologie 2
View this repo's website here: [http://yncredible.github.io/webtech2/](http://yncredible.github.io/webtech2/)

---

* Lab 1:	Introduction to Git and Github.
* Lab 2:	Advanced CSS3 animations.
* Lab 3:	Advanced JavaScript - Write your own js Framework.
* Lab 4:	Build Apps v1 with the Forecast api.
* Lab 5:	Build Apps v2
* Lab 6:	Nodejs
* Lab 7:	Sass
* Lab 8:	Backbone.js
* Lab 9:	Gulp
* Lab 10:	Angular.js
* Final Project for Webtech 2

---

>##Lab 1
Introduction to Git

We were taught how to use Git and the Git commands. From this point on we have to host our projects on Github (or Bitbucket).

* First exercise to collaborate on a project with Git, was to make a mini recipe website in a group of 4, with 4 different dishes. The repo of this mini-project can be found [on Jurgen's page](https://github.com/jurgb/webtechweek1) .


####Lesson's learned
***Why Git?***
	
	. Fool-proof coding
	. collaboration
	. reliable deployment
	. backups!

***Core concepts***
	
	. clone
	. add/commit
	. push / pull
	. branching / checkout
	. merge / rebase
	
***Commands***

cmd | descr. 
--- | --- 
**git clone** | git clone (link)
**git add** | git add (files)
**git commit** | git commit -m "message"
**git pull** | git pull (origin master)
**git push** | git push origin master
**git checkout** | git checkout -b "name"
**git checkout** | git checkout < file >
**git branch** | git branch
**git status** | git status

***Workflow***
	
	1. git pull
	2. git checkout -b branch-name
	3. {{ work here }}
	4. git add .
	5. git status (git diff)
	6. git commit -m "detailed msg"
	7. git checkout master
	8. git merch branch-name
	9. git push

***Pull requests***

	. FORK repository
	. add git remote upstream
	. git fetch upstream / git merge upstream
	. make changes and publish
	. issue pull request
	. repo owner will evualuate and merge your code




---


>##Lab 2
Advanced CSS3 animations

We were taught how to code professional animations using CSS3.

In the Lab2 folder you will find 2 exercises:

* exercise no. 1 : Click on the square, and 2 other squares slide in
* exercise no. 2 : Some kind of "choose user" screen, but then with some cool animations

####Lesson's learned

Mastering CSS animation and transitions.

	animations
	transitions
	transformations
	translates

**YOU WILL BE CREATING ANIMATIONS WHERE YOU CALL A TRANSFORMATION THAT USES A TRANSLATE FUNCTION**

***Transistions***

	. animation between changes
	. properties we want to animate need to be defined
	. triggered by adding classes of ( :hover )
	. repaints (visibility) reflows (layout)
	. can be bad for performance!
	
***example***

	. transition: property duration timing-function delay
	. background-color 5s linear 1s

**USE CSS TRANSFORM(ATION)S INSTEAD!**

***Transformations***

	. physically change the look of an element
	. can be 2D or 3D
	. translate()
	. rotate()
	. scale()
	. skey()
	. matrix()
	. perspective()
	. x, y, z

***Animations***

	. keyframes
	. can loop
	. can start automatically
	
***Pitfalls***

	. browser support?
	. do I need vendors prefixes?
	. fallbacks?
	. old browsers? cssSandpaper
	. performance?

**TEST TEST TEST!!!**

---

>##Lab 3
Advanced javaScript: Build your own JS Framework.

In the Lab3 folder you will find a todo app, powered by a custom js Framework.

***3/4/2014 UPDATE: The "click" functionality is still to be added later on.***


####Lesson's learned
	. DRY = DON'T REPEAT YOURSELF
	. function's aren't flexible enough for large apps

*** USE PROTOTYPES ***

	HTMLElement.prototype.changeColor = function(color)
	{
		this.style['color'] = color;
	}
	document.getElementById('elem').changeColor('purple');

***Prototypes***

	. != DRY
	. ultimate flexibility
	. don't extend DOM
	. create wrapper objects instead


---

>##Lab 4
Building an app prototype using forecast.io.


In the Lab4 folder you will find 2 app prototypes:

* **weatherApp_v1**: This was my first attempt. I used it to try to understand how to the forecast api is put together. It's unfinished, as in "un-styled".
* **weatherApp_v2**: This is my finished product built on **Bootstrap**. It's a minimal weather app, based on a design I found on the internet. (***The design is included in the folder gfx***)

You can check out the finished product here: [www.yannicknijs.be/weather/](http://www.yannicknijs.be/weather/)


####Lessons learned

	. AJAX (asynchronous javascript and XML / JSON)
	. JSON (javascript object notation)
	. XMLHttpRequest();
	. Samen-origin policy
	. JSONP (JSON with padding) : callbacks
	. CORS (alternative to JSONP)
	. localstorage (much like a cookie)
	. geolocation
	. fastclick.js (remove 300ms delay on mobile devices)


---


>##Lab 5
Building an app for We Are IMD: **Terrappke**

In the Lab5 folder you will find my attempt. This assignment also required the use of the forecast api. **Built on Bootstrap**

***Terrappke is an app that invites passionate (future) students to the Creativity Gym terrace, to come and talk about Webdesign & Webdevelopment.***

---

>##Lab 6
Introduction to Nodejs, Express and Web sockets

***What is node.js?***

Node.js is a server-side javascript built on google's v8 javascript engine.

You can do what PHP does, but then with javascript.

Ideal for event-driven apps which are continiously updated when new data is available.

	. performance oriented
	. non blocking io (input/output	)
	. accept more requests at the same time
	
***Why node.js?***

It's javascript on the server, which is great for front-end developers who code JS anyway

	. full stack js development
	. fast & event-driven
	. asynchronous (uses callbacks)
	. modular
	. in high demand!
	
In node.js we only have one **single thread** combined with and event-drive architecture. Unlike PHP where every incoming HTTP request gets its own thread. (uses more memory and waits until execution is done)

####Lessons learned

Node is probably the hardest thing we've seen this school year. 


	. npm (node package manager)
	. express (node webapp framework)
	. faye (pub/sub)
	. jade (node template engine)
	. nodemon (monitor node app)
	. routes
	. views
	. npm install (install dependencies)
	. package.json (node info file)

---

>##Lab 7
Introduction to Sass, a css preprocessor.

**SYNTHETICALLY AWESOME STYLESHEETS**

***Why SASS, why use a pre-processor?***
	
	. less code
	. variables
	. mixins
	. organise CSS
	

####Lessons learned

	. imports
	. variables
	. nesting
	. mixins
	. operators
	. SASS Frameworks (Bourbon, Compass)
	. livejs (bye F5)

	

---

>##Lab 8
Backbone.js workshop and live coding session, hosted by District01.

---

>##Lab 9
Introduction to Gulp, a task runner.

####Lessons learned

	. gulp
	. minify-css
	. concat-css
	. gulp-watch
	. imagemin
	. gulpfile.js
	
---

>##Lab 10
Angular.js workshop, hosted by District01.

---

>##Final Webtech project
The amazing IMDWall.

During workshops the /questions page will be projected onto the wall. If anyone has a question in mind, they can submit a question on the /ask page and it will be sent to the questions overview. People can vote on their favorite questions. This all happens live, without refresh. At the end of each workshop or presentation the speakers will answer the most voted questions.


Alive and running: [http://yncredible.herokuapp.com/](http://yncredible.herokuapp.com/)


***Technologies used in my project***

	. node.js (server-side javascript)
	. bootstrap (css framework)
	. heroku (free node.js hosting)
	. git / github (version control)
	. express (node.js framework)
	. faye (pub/sub)
	. jade (template engine)
	. gulp (task runner)
	
***Functionality I would love to add later on***

	. mongodb / mongoose (database storage)
	. SASS (css pre-processor)
	. backbone.js or angular.js (javascript framework)
---





	





