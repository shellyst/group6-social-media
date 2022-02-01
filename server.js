// const express = require("express");

// // Import the routes
// const routes = require("./controllers");

// // Import the connection settings
// const connection = require("./config/connection");

// const session = require("express-session");
// const sequelize = require("./config/connection");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const app = express();
// const PORT = process.env.PORT || 3002;

// const sess = {
//   secret: "Super secret secret",
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Turn on routes
// app.use(require("./controllers/"));

// // Turn on connection to DB and server
// // {force: true} forces MySQL to recreate tables if there are association changes with them.
// connection.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log("App now listening on PORT " + PORT));
// });



const express = require('express');
const routes = require('./controllers');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const sequelize = require('./config/connection');
const { json } = require('express/lib/response');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//turn on Routes
app.use(routes);

// turn on connection to db and server
// we use the sequelize.sync() method to establish the connection to the database
// The "sync" part means that this is Sequelize taking the models and connecting them to associated database tables.
// If it doesn't find a table, it'll create it for you!
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening'));
});