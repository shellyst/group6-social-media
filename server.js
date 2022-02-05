const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const { json } = require("express/lib/response");

const app = express();
const PORT = process.env.PORT || 3002;

const hbs = exphbs.create({});

// Initializes session and uses cookies to store session information.
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

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Turns on routes.
app.use(routes);

// Turns on connection and establishes the database.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now Listening on port " + PORT));
});
