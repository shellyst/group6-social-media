// This file contains data for seeding the user table

const { User } = require('../models');

const userdata = [
  {
    id: 1,
    username: 'Lorem',
    email: 'lorem@gmail.com',
    password: 'password123',
  },
  {
    id: 2,
    username: 'Ipsum',
    email: 'ipsum@gmail.com',
    password: 'password1234',
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks:true });

module.exports = seedUsers;
