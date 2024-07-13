import mongoose from "mongoose";
import User from "../model/User.model";
import bcrypt from 'bcryptjs';
export const getAllUser = async (req, res) => {
    let users;
    try {
        users = await User.find();
    }
    catch (err) {
        return console.log(err);
    }

    if (!users) {
        return res.status(404).json({ message: "No users Found" });
    }
    return res.status(200).json({ users });
}

export const signup = async (req,res) => {
    const temp = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({email : temp.email});
    }
    catch(err){
        console.log(err);
    }
    if(existingUser)
        res.status(400).json({message: "Please log in"});
    const {name,email,password} = temp;
    const hashedpassword = bcrypt.hashSync(password);
    const user = new User({
        name,
        email,
        password : hashedpassword,
        blogs: []
    });
    try{
        await user.save();
    }
    catch(err){
        return console.log(err);
    }
    return res.status(201).json({user});
}


export const login = async (req,res) => {
    const temp = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({email : temp.email});
    }
    catch(err){
        console.log(err);
    }
    if(!existingUser)
        res.status(400).json({message: "Incorrect Email"});
    
    const isMatch = bcrypt.compareSync(temp.password,existingUser.password);
    if(!isMatch) 
        res.status(400).json({message: "Incorrect Password"});
        
    return res.status(201).json({existingUser});
}

