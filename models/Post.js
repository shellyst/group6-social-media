const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create Post Model
class Post extends Model {}

// Create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // Create reference to the User model
      references: {
        model: "user",
        key: "id",
      },
    },

    // Featured image for post
    featured_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // Text content of post
    content_text: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
