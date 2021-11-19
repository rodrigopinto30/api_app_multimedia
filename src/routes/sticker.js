const mongoose = require('mongoose');
const express = require('express');
const stickerSchema = require('../models/sticker');

const routerSt = express.Router();

// Create sticker
routerSt.post('/stickers', (req, res)=>{
    const sticker = stickerSchema(req.body);
    sticker   
        .save()
        .then((data)=> res.json(data))
        .catch((error)=>res.json({message: error}));
});

// Get all Stickers
routerSt.get('/stickers', (req, res)=>{
    stickerSchema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
});

// Get an user
routerSt.get('/stickers/:id', (req, res)=>{
    const {id} = req.params;
    stickerSchema
        .findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
});

// Update user
routerSt.put('/stickers/:id', (req, res)=>{
    const{id} = req.params;
    const{title, author, content} = req.body;
    stickerSchema
        .updateOne({_id:id},{$set: {title, author, content}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
});

// Delete an user
routerSt.delete('/stickers/:id', (req, res)=>{
    const {id} = req.params;
    stickerSchema
        .remove({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
});



module.exports = routerSt;