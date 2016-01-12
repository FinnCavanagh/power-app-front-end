### README

### Welcome to Power App


["Loneliness as big a killer as obesity and as dangerous as heavy smoking"](http://www.nhs.uk/news/2015/03March/Pages/Loneliness-increases-risk-of-premature-death.aspx).  
This app is a communication tool for sending meaningful messages in order to combat this rise in loneliness. The idea was inspired by apps like [YO](https://www.justyo.co/) and [Somebody To](http://somebodyapp.com/) and as an interruption to an overcrowded market of messaging apps full of noise and distraction. 

Using a quotes API, Power generates random categories for the user to choose an inspirational message which they can personalise in an editor and send via SMS. 

### Navigation 
* Using Passport & JWT for Log In and Authentication I then used Angular methods (ng show and ng hide) to navigate between the Join and Log In forms in order to keep the look really clean. 

* Once logged in the user chooses a category to generate a inspiration for a message. The quote appears beneath and can be edited by the user. 

* The user can choose to keep the message anonymous, can send it from the author of the quote or enter their name. 

* Using [Twilio](https://www.twilio.com/), the user can then send the message by SMS. 

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
* JQuery

### Wins

* Using MongoDB and JSON objects for debugging and Database admin was so much easier than ActiveRecord & Ruby On Rails! Things become a lot easier when the objects stored in your database are essentially identical to the objects your client Javascript sees. 
* Sucessfully integrating Twilio
* Creating a clean, scrolling design using Angular and JQuery

### For the Future

* I'm a little obsessed with UX and the user journey here is not clear at all. I'll be working on better routes and an intuitive progression through the stages
* I'm developing an inbox so you can see all your received and sent Powers
* Ideally the messaging app would show contacts with a Power Status which would indicate what mood you were in. Users could then send messages which helped or corresponded with that mood.

333


