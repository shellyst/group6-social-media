# Petbook - Group 6 Project Two

## Table of Contents

- [Description](#description)
- [Heroku](#heroku)
- [Installation](#installation)
- [Usage](#usage)
- [Preview](#preview)
- [Contributors](#contributors)

## Description

This application is designed as a social media app, which allows users to create, edit, and delete posts about their pets, or any animals they want. As a full-stack application, it uses Node.js and Express.js to create a RESTful API, using MySQL and the Sequelize ORM for the database, and Handlebars.js as the template engine.

Our application uses both GET and POST routes for retrieving and adding new data, and includes user authentication using express-session and cookies, as well as protects API keys and other sensitive information using environment variables.

## Goals and Obstacles

Petbook is designed to give pet lovers a chance to engage in the social media world without ever having to engage with people! Users can post and share their own pets, or discuss and admire the pets of others! A challenge during this project was a lack of communication between the front and back end team, which resulted in a weaker front-end. Our group managed to work together to fix front-end issues, in order to have a completed final project.

## Heroku

[View Deployed App](https://infinite-escarpment-26658.herokuapp.com/)

## Installation

In order to use the application, follow these steps in the terminal in the root of your application:

`npm init`

`npm install`

- Add a .env file to the root of the project

```text
DB_NAME='group6_social_media_db'
DB_USER='root'
DB_PW='XXX'
```

## Usage

Once npm packages have been installed, user may use the application using the following commands in the terminal:

`mysql -uroot -p`

`source db/schema.sql`

`quit;`

`npm run seed`

`npm start`

## Preview

[![image.png](https://i.postimg.cc/Vvq1pKnZ/image.png)](https://postimg.cc/SYxwz7Zc)

## Contributors

Quinn Pucci, Michelle Stone, Daniel Yoshizawa, Suthan Kathir, Huzaifa Mohammed, Tomi Solaja
