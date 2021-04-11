# ShoppingList

A simple shopping list app to practise full stack web development and deployment using netlify and heroku. 
Visit the website [here](https://shoppinglist-pearl.netlify.app/). (Best to view on mobile as it was built mobile first)

![]()

## Built with

+ Client side: JavaScript, CSS and HTML
+ Server side: Node.js
  Dependencies: cors, express, pg, nodemon
  
## Requirements
- [x] User can add items to shopping list
- [x] User can mark items as picked up 
- [x] User can edit quanity of a specific item
- [x] User can remove an item from shopping list
- [x] Items persist after server restart 

## Installation 
Clone or download this repo

## Usage 
## To run the server 
+ Navigate to the root directory of this repository
+ Ensure docker desktop app is running
+ cd into server and in your terminal run docker-compose up 
+ To teardown the containers completely and remove all artifacts run docker-compose down --remove-orphans --volumes 

  
## TODO 
- [ ] Testing with Jest
  
  
## Future Features
- [ ] Delete all functionality/start a new shopping list 
- [ ] Ability to have different users with login and logout functionality
- [ ] Ability to save shopping lists 


## Bugs 
- [ ] Shopping list items reorder in order of item number on refresh 
  
