### README

### Welcome to Power App

This app is a communication tool for sending meaningful messages. The idea was inspired by apps like [YO](https://www.justyo.co/) and [Somebody To](http://somebodyapp.com/) and as an interruption to an overcrowded market of messaging apps full of noise and distraction. 

Using a quotes API, Power generates random categories for the user to choose an inspirational message from

### Navigation 
Using Passport & JWT for Log In and Authentication I then used Angular methods (ng show and ng hide) to navigate between the Join and Log In forms in order to keep the look really clean. 

Once logged in the user chooses a category to generate a inspiration for a message. The quote appears beneath and can be edited by the user. 

The user can choose to keep the message anonymous, can send it from the author of the quote or enter their name. 

Using Twilio, the user can then send the message by SMS. 

### The Wireframes

I had a firm design in mind for Power. It's all about meaning so I wanted the words to take centre-stage.
![image](https://github.com/FinnCavanagh/power-app-front-end/blob/master/images/power-wireframes-1.png)
![image](https://github.com/FinnCavanagh/power-app-front-end/blob/master/images/power-wireframes-2.png)


### The Database
![image](https://github.com/FinnCavanagh/power-app-front-end/blob/master/images/power-database-diagram.png)

### Technology: a MEANstack 

* Passport
* JWT
* Node.js
* MongoDB
* Mongoose
* Express
* Angular.js
* Skeleton CSS

### Wins
* Using MongoDB and JSON objects for debugging and Database admin was so much easier than ActiveRecord & Ruby On Rails! Things become a lot easier when the objects stored in your database are essentially identical to the objects your client Javascript sees. 


