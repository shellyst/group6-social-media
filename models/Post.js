const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Post Model
class Post extends Model {}

// Create fields/columns for Post model
Post.init (
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        post_url: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                isURL: true
            }
        },
        author_id: {
            type: Datatypes.INTEGER,
            // Create reference to the User model
            references: {
                model: 'user',
                key: 'id'
            }
        },
        // Featured image for post
        featured_image: {
            // Subject to change. Depends on how images will be stored
            type: Datatypes.STRING,
            allowNull: true
        },
        // Text content of post
        content_text: {
            type: Datatypes.STRING,
            allowNull: true
        },
        // Link content of post
        content_link: {
            type: Datatypes.STRING,
            allowNull: true,
            validate: {
                isURL: true
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'post'
    }
);

module.exports = Post;