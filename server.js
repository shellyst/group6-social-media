const express = require("express");

// Import the routes
const routes = require("./controllers");

// Import the connection settings
const connection = require("./config/connection");

const session = require("express-session");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Turn on routes
app.use(require("./controllers/"));

// Turn on connection to DB and server
// {force: true} forces MySQL to recreate tables if there are association changes with them.
connection.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("App now listening on PORT " + PORT));
});
