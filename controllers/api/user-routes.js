const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email, // Finds user based on email.
    },
  }).then((foundUser) => {
    // new variable foundUser
    if (!foundUser) {
      res.status(404).json({ message: "Incorrect credentials." }); // email wrong error
      return;
    }
    const validPass = foundUser.checkPassword(req.body.password); // check password function to verify password, new variable for validPass

    if (!validPass) {
      res.status(404).json({ message: "Incorrect credentials." }); // password wrong error
      return;
    }
    console.log("logged in");
    req.session.save(() => {
      req.session.loggedIn = true; // session included
      req.session.userId = foundUser.id; // verifying user
      res.json({
        foundUser,
        message: "Logged In"
      })
      // res.render('/layouts/main')
    })
  })
})
// ---------------------


// create Signup
router.post("/signup", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }).then((dbUserData) => {
    console.log(dbUserData);

    res.status(200).end();
  });
});

// logout route
router.post("/logout", (req, res) => {
  console.log(req.session);
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Return a single user.
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Post,
        attributes: ["id", "author_id", "title", "content_text"],
      },
      {
        model: Comment,
        attributes: ["comment_text"],
      },
    ],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id." });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update a user.
router.put("/:id", (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete a user.
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (dbUserData) {
        res.status(404).json({ message: "No user found with this id." });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
