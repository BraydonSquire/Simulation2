const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config() ;
const checkForSession = require('./middlewares/checkForSession');

// Controllers
const auth_controller = require('./controllers/auth_controller');
const properties_controller = require('./controllers/properties_controller');

const app = express();
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: "qtyhgzefqacfemol",
    resave: false,
    saveUninitialized: false
}));
// app.use(checkForSession);
app.use(express.static(`${__dirname}/../public/build`));

// Endpoints
    // Auth
app.post('/api/auth/login', auth_controller.login);
app.post('/api/auth/register', auth_controller.register);
app.post('/api/auth/logout', auth_controller.logout);

    // Properties
app.post('/api/properties', properties_controller.createNewProperty);
app.get('/api/properties', properties_controller.getAllProperties);
app.delete('/api/properties/:id', properties_controller.deleteProperty);
// app.get('/api/properties/filter', properties_controller.filter);


// Express is helping my server to listen on port 3000
const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );