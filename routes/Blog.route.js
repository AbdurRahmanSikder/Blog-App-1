import express from 'express';
const blogRouter = express.Router();
import {addBlog, getAllBlog, editBlog, deleteBlog, getBlog} from './../controller/Blog.controller'

blogRouter.get('/',getAllBlog);
blogRouter.post('/add',addBlog);
blogRouter.put('/edit/:id',editBlog);
blogRouter.delete('/delete/:id',deleteBlog);
blogRouter.get('/:id',getBlog);


export default blogRouter;