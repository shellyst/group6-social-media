const router = require('express').Router()
    // const sequelize = require('../config/connection')
const { Post, User, Comment } = require('../models')

// THIS IS NO LONGER THE LOGIN ROUTE, THIS WILL ONLY LOAD LOGIN PAGE. NEW WORKING ONE IN USER-ROUTES
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return
    }
    console.log("Login route is working");
    res.render('login');
});

// this route renders singup page - not to be confused with POST user route in user-routes.js

router.get('/signup', (req, res) => {
    /* if (req.session.loggedIn) {
        res.redirect('/')
        return
    } */
    console.log("signup route is working");
    res.render('signup');
});

//router.get('/dashboard', (req, res) => {
    /* if (req.session.loggedIn) {
        res.redirect('/')
        return
    } */
    /* console.log("dashboard route is working");
    res.render('dashboard');
}); */

router.get('/create-post', (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/')
    //     return
    // }
    console.log("create-post route is working");
    res.render('create-post');
});


// tentative route to display all posts(and there comments) assuming user is logged in - this will still require session to work properly.
router.get('/', (req, res) => {
    console.log(req.session)
    Post.findAll({
            attributes: [
                'id',
                'author_id',
                'featured_image',
                'content_text',
                'created_at',
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbPostData => {
            console.log(dbPostData);
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('homepage', {
                layout: 'main',
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})


module.exports = router