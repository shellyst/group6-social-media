const sequelize = require('../config/connection');

// Load the files that contain the seeding data
const seedUsers = require('./userData');
const seedPosts = require('./postData');

// Execute the seeding operation
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPosts();

  process.exit(0);
};

seedAll();