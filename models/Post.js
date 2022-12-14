const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { };

// Post model created here
Post.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: false,
        modelName: 'post'
    }
)

module.exports = Post;