CSE 3901 Project 6 - Sudoku 
Authors:  Kaye Wrobleski, Sydney Hodge, David Kohn, Spencer Rudolph, Daniel Jiang, Jimmy Pan
Date: 12-03-2014

Project Description
-------------------
This project attempts to create a online Sudoku that creates a user and credentials. You can log in and view previously played games as well as make new games. 

Description of Files
--------------------
sudoku/db/development.sqlite3 This contains our database of all our users and games.
sudoku/app/assets/javascript/games.js This contains our javascript for the timer. 
sudoku/app/assets/stylesheets/games.css.scss This contains our css for our board game. 
sudoku/app/views/games This folder contains all the html files with imbeded ruby in them. 
sudoku/app/views/home This folder contains the html file for the home screen. 
sudoku/games.txt This folder contains the answer key and the mask that hides the numbers that aren't given to the players. 

How To Execute
--------------------

enter proj6
enter Sudoku
run rake
run rails server
open firefox and navigate to http://localhost:3000

How Sudoku works
--------------------
When you enter our sight you are prompted to log in.
You will need to sign up to play a game.
After clicking sign up the website will prompt you for a username, password and password confirmation.
Then our Sudoku will welcome you and you will return to the login screen. 
Now sign in with your newly created log in and you will enter into the homescreen.
Click the Go to game link and you will see a game that you can play.
After that you may click Play Game on a game that you desire. 
Then you can start playing the game if you choose to be timed while playing the game press f5.




