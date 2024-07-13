import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    }]
});
const User = mongoose.model("User", userSchema);
export default User;
