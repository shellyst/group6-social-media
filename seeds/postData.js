// This file contains data for seeding the post table

const { Post } = require('../models');

const postdata = [
  {
    id: 1,
    author_id: 1,
    featured_image: 'https://i.imgur.com/eLmmpdR.jpeg',
    content_text: 'My cat sneaks into zoo enclosure, finds another cat',
  },
  {
    id: 2,
    author_id: 1,
    featured_image: 'https://i.imgur.com/J2HZir3.jpeg',
    content_text: 'Cat facts',
  },
  {
    id: 3,
    author_id: 1,
    featured_image: 'https://i.imgur.com/OhmyAPs.jpeg',
    content_text: 'We forgot a small towel on the floor. The cat claimed it in less than 5 minutes.',
  },
  {
    id: 4,
    author_id: 2,
    featured_image: 'https://i.imgur.com/qBpMFOs.jpeg',
    content_text: 'My dogs fell asleep playing with a tennis ball.',
  },
  {
    id: 5,
    author_id: 1,
    featured_image: 'https://i.imgur.com/xtoLyW2.jpeg',
    content_text: 'Canadian canoeing adventure with dog',
  },
  {
    id: 6,
    author_id: 2,
    featured_image: 'https://i.imgur.com/trZxMHq.jpeg',
    content_text: 'You say $2000 Facebook machine, I say $2000 bird warmer.',
  },
  {
    id: 7,
    author_id: 1,
    featured_image: 'https://i.imgur.com/67tSocD.jpeg',
    content_text: 'Not sure if he belongs here but my bird is pretty darn cute',
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;