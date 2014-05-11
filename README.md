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

---

>##Lab 4
Building an app prototype using forecast.io.


In the Lab4 folder you will find 2 app prototypes:

* **weatherApp_v1**: This was my first attempt. I used it to try to understand how to the forecast api is put together. It's unfinished, as in "un-styled".
* **weatherApp_v2**: This is my finished product built on **Bootstrap**. It's a minimal weather app, based on a design I found on the internet. (***The design is included in the folder gfx***)

You can check out the finished product here: [www.yannicknijs.be/weather/](http://www.yannicknijs.be/weather/)


---


>##Lab 5
Building an app for We Are IMD: **Terrappke**

In the Lab5 folder you will find my attempt. This assignment also required the use of the forecast api. **Built on Bootstrap**

***Terrappke is an app that invites passionate (future) students to the Creativity Gym terrace, to come and talk about Webdesign & Webdevelopment.***

---

>##Lab 6
Introduction to Nodejs, Express and Web sockets

In the Lab6 folder you will find my first attempt to built a nodejs application.

* nodejs: Live voting on drinks
* imdwall: voting on questions, built on **Bootstrap**

***4/04/2014 UPDATE: It still needs some work.***

---

>##Lab 7
Introduction to Sass, a css preprocessor.

---

>##Lab 8
Backbone.js workshop and live coding session, hosted by District01.

---





	





