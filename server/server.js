const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
// const checkForSession = require('./middlewares/checkForSession');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(session({
    secret: "qtyhgzefqacfemol",
    resave: false,
    saveUninitialized: false
}));
// app.use(checkForSession);
app.use(express.static(`${__dirname}/../public/build`));

// Express is helping my server to listen on port 3000
const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );