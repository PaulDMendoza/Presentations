AngularJS - Beyond the basics
====================
Tech Setup
-----------
Go to C:\git\Presentations\AngularJS\demoApp

Run **npm start** to start app

Navigate to http://localhost:3000/index.html


(1 mins) Summary
-------
Summary: Paul Mendoza will show how to build advanced, well designed and performant AngularJS applications. This will cover a quick introduction to AngularJS and then dive into the deep portions of AngularJS that often confuse developers building AngularJS applications. We'll cover topics such as factories, services, directives, minification concerns, $apply vs $digest, routing, proper link handling and more. 

Paul Mendoza is a software development manager and has been building both consumer and enterprise web applications for over ten years. 


(2 mins) My Background
-------------
Took existing non-AngularJS enterprise application and have been adding AngularJS to it over the last couple years.

Created an application from scratch using AngularJS. This is a single page application.

Development experience on both front end and backend. 

(1 min) Our Goal
--------
- Quick introduction to the basics of AngularJS.
- Why AngularJS is useful compared to alterntiaves
- Advanced topics you should know will be most of the talk 

(5 mins) Why AngularJS?
--------------
- Developed by 2009 and maintained now by emloyees at Google. 
- Complete framework to build an app. 
- You could build an entire app with AngularJS
- Don't need any jQuery (ie finding things by IDs)
- Less JavaScript for trivial data binding tasks
- Use HTML to define data layout meaning easier for designers
- Bind user interfaces directly to POJO (Plain Old JavaScript Objects) 
- Write less code
- Easy to get started with
- AngularJS can be the complete app or just in parts of a page

AngularJS Basics
----------------
- Open "SimpleForm" page
- Importing AngularJS 


Form validation
---------------
ngMessages

Watchers and :: binding
----------------------
In AngularJS 1.3 one direction binding added using :: syntax. 

Performance
-----------
Use Benchpress to test performance. JavaScript to benchmark performance for AngularJS. 


Links
-----
ng-src instead of src

ng-href instead of href

Factories and Services
----------------------
$http, $routeProvider and others are examples of factories and services

Auto injected into controller based on name using JavaScript reflection


Handling minification with controllers
--------------------------------------
Minification renames inputs to controllers. So our factories and services can't be auto injected.


Directives
----------
If writing $(element) in controller you need a directive		
	
	
Summary
------
We learned about faster one directional binding, how to properly build links, factories and services, handling minification and many other topics which should have an immediate benefit to any AngularJS application you build.
