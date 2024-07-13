import express from 'express';
const blogRouter = express.Router();
import {addBlog, getAllBlog} from './../controller/Blog.controller'

blogRouter.get('/',getAllBlog);
blogRouter.post('/add',addBlog);


export default blogRouter;