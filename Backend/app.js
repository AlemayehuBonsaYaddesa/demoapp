// importing the express module and creating an instance of it
const express = require('express');

// creating an instance of the express application
const app = express();

// use express json middleware
app.use(express.json());

// lets import the dotenv file
require('dotenv').config();

// defining the port number on which the server will listen
const port = process.env.PORT;

// import cors
const cors = require('cors')

// use the middleware
app.use(cors())

// lets import the routes file
const Routes = require('./routes');

// lets use the routes middleware
app.use(Routes);

// define a route handler for the default home page
app.get('/test', (req, resp) => {
    return resp.send('Testing Webserver')
});


// start the server
app.listen(port, () => console.log(`server listening on port ${port}`));