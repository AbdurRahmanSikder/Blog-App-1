import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
});
const Blog = mongoose.model("Blog",blogSchema);
export default Blog;