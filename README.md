
 
  <h1 align="center"> :smiley_cat: Welcome to the Secret Family Recipe Read me! :smiley_cat: </h1>

# :bento: :ramen: :pie: :cookie: :tropical_drink: :taco: :stuffed_flatbread: :burrito: :pizza: :green_salad: :bowl_with_spoon: :shallow_pan_of_food: :fries: :fried_egg:  :dumpling: :spaghetti: :moon_cake: 


<p align="center">
 :trollface:
<img src ="http://www.simpleimageresizer.com/_uploads/photos/94c5bea8/68747470733a2f2f72696f74666573742e6f72672f77702d636f6e74656e742f75706c6f6164732f323031382f30332f6772616e646d61732d7265636970652e6a7067_35.jpg">
 :trollface:
<p align="center">
  <b>Some Links:</b><br>
  <a href="https://secret-family-recipes-2-api.herokuapp.com/">API</a> |
  <a href="#">Client</a> |
  <a href="#">Marketing</a> |
  <a href="#-scroll-api-documentation-scroll">Documentation</a> |
  <a href="#soon-end-points-end">End Points</a> |
  <a href="#atom-data-model-electron">Data Model</a> |
  <br><br>
 
 <p align="center">
  <a href="https://secret-family-recipes-2-api.herokuapp.com/"><img src="https://i.ibb.co/FzsS2Qc/68747470733a2f2f626c6f672e7261706964372e636f6d2f636f6e74656e742f696d616765732f6c652d696d672f32303134.png" alt="1" border="0"></a>
  
</p>

  <h1 align="center"> :scroll: API Documentation :scroll:</h1>
  
## :hammer_and_wrench: Backend Framework Used :closed_lock_with_key:
 * Node :pirate_flag:
   * Express.js :white_flag:
 ## :atom: Data Model :electron:
 ## click on picture for bigger image if this is hard to read

  <a href="https://i.ibb.co/svm7jDM/datamodel.png"><img src="http://www.simpleimageresizer.com/_uploads/photos/94c5bea8/datamodel_40.png" alt="1" border="0"></a>

 
 ### Users
 ```javascript
 {
    id: INT
    username: STRING
    password: STRING
    email: STRING
    name: TEXT
 }
 ```
 ### Recipes
  ```javascript
 {
    id: INT
    title: STRING
    ingredients: STRING
    instructions: TEXT
    source: STRING
    image: STRING
 }
 ```
 ## :soon: End Points :end:
 
 
| Method | End point | Description |
| ------ | ----------------------- | -------------------------------------------------- |
| POST   | `/auth/register`        | Registers a user.                   |
| POST   | `/auth/login`           | Logs the user in and returns a token.              |
```javascript
{   //Bellow is the response you get from logging in succesfully
    "message": "Welcome to our API",
    "token": "this will be a hashed value auto generated"
}
```

| GET   | `/auth/users`           | returns a list of users usernames and name.              |
```javascript
{
         //Bellow is the data you get back from the GET for users
        "username": "TestUser1",
        "name": "John Doe"
    }
```


# :bento: :ramen: :pie: :cookie: :tropical_drink: :taco: :stuffed_flatbread: :burrito: :pizza: :green_salad: :bowl_with_spoon: :shallow_pan_of_food: :fries: :fried_egg:  :dumpling: :spaghetti: :moon_cake: 

