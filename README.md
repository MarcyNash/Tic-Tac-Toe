# Tic Tac Toe Game Project

## The Tic Tac Toe app I built is a client-side app and uses a RAILS server. The
## technology on the client uses

- HTML
- CSS and SASS
- Bootstrap
- Javascript

The server provides authentication and persists the game objects. A user creates
a user account, logs in and can then play tic tac toe and view his/her game statistics --
won, lost and games in progress. Additionally, the authentication piece allows the
user to change his/her password and log out. A game is created on the server and player_x
and player_y play until one player wins or there are no moves left, ie, a draw. Each move is
sent to the host to record; the client is responsible for determining when the game ends
either by a win or draw. The last move of the game is sent to the server with a boolean,
over set to true.

My planning began with a thorough read of the game API and the assignmemt requirements. This
allowed me to create data structures based on the data sent to and received from the server.

# Data Structures

## player object
     attributes - id, email, accessToken
     methods - signIn, signUp, changePassWord, signOut, gamesWon, gamesPlayed
## game object
      attributes - player_x (player object), player_o (player object), move
  success/failure states and messages

## Wireframe

[First Wireframe](http://imgur.com/a/6Ht3d)

As I worked through the project, I decided to have a navigation bar across the top of
the page, omit the instructions and have a status bar at the bottom of the page.

## User Stories

As a user I want to know how many games I've played and how many games I won.
As a user I want to know which player won the most games.
As a user I want to be given an opponent.
As a user I want to be able to play with a friend.
As a user I want to choose what symbol will represent me when I play the game.

## Building the App

I structured my app as per the trainings from class. I realized that store.js was
not the best choice for the game and player data structures. I moved them into a
seperate file, gameEngine.js which allowed me to encapsulate the game and player
objects in a separate file. What I did not expect was the interaction the among
the events, api's, ui's and the game data. I expected the game data to be available
to the event handling by simply requiring the files when needed. This was not the
case. Game object methods were not allways able to access the data they needed that
was stored in the same file. As time ran slim, I passed data as arguments into
the methods that needed them. I still don't really know why this happened or how
to fix it. As time permits I will explore the issues.

I thought about re-structuring the objects, but I didn't have the time. I learned a
lot about why planning up is so important.   
