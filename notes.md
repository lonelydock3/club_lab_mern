# Notes

## Rest API

- Client
    - React application (components and such)
- CRUD
    - APIs (REST API)
    - Create 
        - HTTP POST
        - Endpoint: /api/devices + payload
        - Status Code: 201 + Location
    - Read 
        - HTTP GET
        - Endpoint: /api/devices
        - Status Code: 200 + payload
    - Update 
        - HTTP PUT
        - Endpoint: /api/devices/1 + payload
        - Status Code: 200
    - Delete
        - HTTP DELETE
        - Endpoint: /api/devices/1
        - Status Code: 200
- Server
    - Express (node js backend framework )

## Postman 

- Since we dont have a front end to work with, we use this to test out our REST API requests 
- Use this to easily send different requests
- Just specify the route link based on the type of request (Ex: "http:/localhost:PORT/api/goals")
- Can also add stuff like text to come thru the body (want to do this via the urlencoded way)

## MongoDB Atlas 

- Cloud database
- To setup: 
    - Create a project
    - Build database 
        - For starting off, do a shared cluster (free)
        - You can do all default settings
        - You can name it what you want 
    - Create a database user with a username and password
        - lonelydock3
    - Connect from: keep local environment
    - Add current IP address 
    - Go to Browse Collections
        - Click Add Own Data
        - Give the database a name and give the collection a name
    - Go to Connect
        - Compass
            - Copy the string and open MongoDB Compass
    - In Compass
        - Paste the string in the connection part 
        - Append the database name to the end of the string
        - Fill in password in the \<password\> part 
        - Click Connect
    - Back to MongoDB website
        - Click Connect 
            - Connect your application (Drivers)
                - Copy the string and paste it in your ```.env``` file 
                - NOTE: make sure you have MongoDB installed using npm
                ```
                npm install mongodb
                ```
                - Make sure the string in the ```.env``` has your correct password in it and make sure after the ```.net/``` you put the name of your database (clublabapp)
                NOTE: make sure mongoose is installed too 
                ```
                npm install mongoose
                ```

---

## Getting started

- Get REST API up and running 
    - Create routes, controllers 
    - Setup error handling (getting body data and such)
- Connect to database
    - MongoDB
    - Connect with mongoose
    - Create models 

--- 

## Documentation

### backend/

```server.js```

- Entry point to the server

```routes/``` 

- Holds all of our routes

```controllers/```

- Each file contains functions that we use within our routes 
- These functions should be async 

```models/```

- Holds the schemas that get put into the database

```middleware/```

- Contain functions that execute when a request is made
    - Good for error handling and such 

```config/```

- ```db.js```
    - Connect to our DB here using mongoose

Example: 

- routes/goalRoutes.js
    - Contains GET, POST, PUT, DELTE for goals
        - Inside the GET route, getGoals, from 'controllers/goalControllers.js, will be called 
- controllers/goalControllers.js
    - Contains functions like getGoals, createGoal, updateGoal, deleteGoal 


### frontend/


### node_modules/

- Hold all of the dependencies
- To get this setup, run: 
    ```
    npm init
    ```
    - Make sure to set the entry point as ```server.js```
    - This will create ```package.json```
    - Now install dependencies 
        ```
        npm i express dotenv mongoose colors
        ```
        - NOTE: colors just gives us nice colors in the terminal 
    - Install nodemon as a dev dependency 
        ```
        npm i -D nodemon
        ```
    - Go into ```package.json```
        - Under "scripts"
            ```
            "scripts":{
                "start": "node backend/server.js",
                "server": "nodemon backend/server.js"
            }
            ```
    - Do ```npm run server``` to test this out now
        - This should spit out any console log in ```server.js```

### Authentication (using Json Web Tokens - JWTs)

[JWT](https://jwt.io/)

- This is so not everyone can just get, create, update, and remove stuff from your database 
- Used for adding user functionality to the site 
- The idea is:
    - We have a route and we want to protect it.  We need to login, get the token, send the token and its headers to access the protected route

```
npm i jsonwebtoken
```

- The JWT has the ID within it (you can change this if you want to)
    - ```jwt.sign({id})``` in ```generateToken(id)``` function

How to use (with postman): 

- Login your user and get the JWT token
- Do the GET request on the '/me' path
    - To do this you must click the Authorization tab in Postman, select the Bearer Token dropdown, and paste in your token
    - Now you can make the GET request sucessfully 

How to protect a route: 

- Need to add protect as an argument (either first or second argument, depending on if the first one is the path)

```
router.route('/').post(protect, setGoal)
```

- NOTE: because of how we setup the middleware, using ```protect``` will give us a ```user.id```

### Encrypting user passwords

Use bcryptJS

```
npm i bcryptjs
```

### Other installations 

Express async handler (used in our controllers)

```
npm i express-async-handler
```

### To run the server

```
npm run server
```

- If you change anything in the ```.env``` file then you must re-run the server


