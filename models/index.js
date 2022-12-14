const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// model relationships defined below
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Post.belongsTo(User, {
    foreignKey: 'user_id',
})

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'set null'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})

module.exports = { User, Post, Comment };