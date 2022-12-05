'use strict';
const userModel =  require('../models/userModel');
const catModel = require("../models/catModel");

const getUsers = async (req, res) => {
    const users = await userModel.getAllUsers(res);
    res.json(users);
};

const getUser = async (req, res) => {
    // choose only one object with matching id
    const user = await userModel.getUserById(req.params.userId, res);
    if (user) {
        res.json(user);
    } else {
        res.sendStatus(404);
    }
};

const createUser = async (req, res) => {
    console.log('Creating a new user: ', req.body);
    const newUser = req.body;
    const result = await userModel.addUser(newUser, res);
    res.status(201).json({userId: result});
};

const modifyUser = async (req, res) => {
    const user = req.body;
    if(req.params.userId){
        user.id = req.params.userId;
    }

    const result = await userModel.updateUserById(user, res);
    if (result.rowsAffected > 0) {
        res.json({message: 'user modified' + user.id});
    } else {
        res.status(404).json({message: 'nothing changed'});
    }
};

const deleteUser = async (req, res) => {
    const result = await userModel.deleteUserById(req.params.userId, res);
    console.log('user deleted', result);
    if (result.rowsAffected > 0) {
        res.json({message: 'user deleted'});
    } else {
        res.status(404).json({message: 'nothing done'});
    }
};


module.exports = {
    getUser,
    getUsers,
    modifyUser,
    createUser,
    deleteUser
};