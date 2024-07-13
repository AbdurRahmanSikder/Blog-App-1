import express from 'express';
import Blog from '../model/Blog.model';

export const getAllBlog = async (req,res) => {
    let blog;
    try{
        blog = await Blog.find();
    }
    catch(err){
        console.log(err);
    }
    if(!blog)
        res.status(400).json({Error: "There is no blog"});
    res.status(200).json({blog});
}


export const addBlog = async (req,res) => {
    const {title, description , image , user} = req.body;

    const blog = new Blog ({
        title,
        description,
        image,
        user
    })

    try {
        await blog.save();
    }
    catch(err){
        console.log(err);
    }
    res.status(200).json({blog});
}