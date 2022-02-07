const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

router.get("/dashboard", (req, res) => {
  console.log("dashboard route 1 is working");
  res.render("dashboard");
});

router.get("/", (req, res) => {
  console.log("dashboard route 2 is working");
  console.log(req.session);
  Post.findAll({
    where: {
      author_id: req.session.userId,
    },
    attributes: [
      "id",
      "author_id",
      "created_at",
      "content_text",
      "featured_image",
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      console.log(dbPostData);
      let posts = "";
      if (dbPostData != null) {
        posts = dbPostData.map((post) => post.get({ plain: true }));
      }
      res.render("dashboard", { posts, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "created_at", "post_content"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      // serialize the data
      const post = dbPostData.get({ plain: true });

      res.render("edit-post", {
        post,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/create", (req, res) => {
  res.render("create-post");
});

router.post("/create/publish", (req, res) => {
  Post.create({
    author_id: req.session.userId,
    featured_image: req.body.featured_image,
    content_text: req.body.content_text,
  })
    // Process the JSON input
    .then((jsonInput) => res.json(jsonInput))
    .catch((error) => {
      response.status(500).json(error);
    });
});

module.exports = router;
