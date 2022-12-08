let mongoose = require("mongoose");

let blogSchema = new mongoose.Schema(
{ 
    name: String, 
    image: String,
    description: String,
    author:
    {
        id:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
    },
    comments: 
    [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});
let Blog = mongoose.model("Blog" , blogSchema);

module.exports = Blog;