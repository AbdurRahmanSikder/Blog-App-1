import express, { response } from 'express';
import Blog from '../model/Blog.model';

export const getAllBlog = async (req, res) => {
    let blog;
    try {
        blog = await Blog.find();
    }
    catch (err) {
        console.log(err);
    }
    if (!blog)
        res.status(400).json({ Error: "There is no blog" });
    res.status(200).json({ blog });
}


export const addBlog = async (req, res) => {
    const { title, description, image, user } = req.body;

    const blog = new Blog({
        title,
        description,
        image,
        user
    })

    try {
        await blog.save();
    }
    catch (err) {
        console.log(err);
    }
    res.status(200).json({ blog });
}


export const editBlog = async (req, res) => {
    let response;
    const ID = req.params.id;
    const { title, description } = req.body;
    try {
        response = await Blog.findByIdAndUpdate(ID, {
            title,
            description
        });
    }
    catch (err) {
        return console.log(err);
    }

    if (!response) {
        return res.status(404).json({ message: "Profile Not found" });
    }
    return res.status(200).json({ message: "Update Done" });

}


export const deleteBlog = async (req, res) => {
    let response;
    const ID = req.params.id;
    try {
        response = await Blog.findByIdAndDelete(ID);
    }
    catch (err) {
        return console.log(err);
    }

    if (!response) {
        return res.status(404).json({ message: "Error" });
    }
    return res.status(200).json({ message: "Delete Done" });

}


export const getBlog = async (req, res) => {
    let response;
    const ID = req.params.id;
    try {
        response = await Blog.findById(ID);
    }
    catch (err) {
        return console.log(err);
    }

    if (!response) {
        return res.status(404).json({ message: "Error" });
    }
    return res.status(200).json({ response });

}
