# Burger App

Burger App is a server-side application that allows users to create and update burger entries, by adding or devouring them. The burger entries are stored in a relational database hosted by Heroku JawsDB add-on. Once the user enters the name of a new burger, the browser will load and display the name and ID of the burger with a "devour" button. This button allows the user to update the state of the burger from not devoured = 0 (default state) to devoured = 1 (updated state). If the user eats the burger, the entry will move from list of available burgers to list of devoured burgers. A burger model that inherits the attributes of an ORM is implemented to create, update and retrieve data from the burgers_db.

Technologies used:
-Express package to create local server
-MySQL to create relational database
-Handlebars for HTML Templating
-Heroku for app hosting and deployment
-GET, POST, PUT routes to retreive, add, and update data
