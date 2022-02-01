const express = require('express');
const session = require('express-session');
const path = require('path');
const exphbs = require('express-handlebars');

// Import the routes
const routes = require('./controllers');

// Import the connection settings
const connection = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;
// const hbs = exphbs.create({ helpers });

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Turn on routes
app.use(routes);

// app.engine('handlebars');
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

// Turn on connection to DB and server
// {force: true} forces MySQL to recreate tables if there are association changes with them.
connection.sync({force:false}).then(() => {
    app.listen(PORT, () => console.log('App now listening on PORT ' + PORT));
});