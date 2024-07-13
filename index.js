import express, { Router } from "express";
import mongoose from "mongoose";
const app = express();
import router from "./routes/User.route"
import blogRouter  from "./routes/Blog.route";

mongoose.connect("mongodb://127.0.0.1:27017/Blog")
.then(()=> app.listen(3000))
.then(() => console.log("App listening port 3000"))
.catch((err) => console.log("Error connection", err));
app.use(express.json());
app.use('/user',router);
app.use('/blog',blogRouter);
app.use('/', (req,res,next) => {
    res.send("Hello world");
})

