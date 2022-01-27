const { Model, Datatypes, DataTypes } = require('sequelize');
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
        author_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            // Create reference to the User model
            references: {
                model: 'user',
                key: 'id'
            }
        },
        // Post Type
        // Used for discerning whether it's a text post, image or video
        post_type: {
            type: DataTypes.STRING,
            allowNull: false
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
        },
        // Video 
        video: {
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