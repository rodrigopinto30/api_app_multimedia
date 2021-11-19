const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: 'src/.env' });
const userRoutes = require('./routes/user');
const stickerRoutes = require('./routes/sticker');

const app = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', stickerRoutes);

// Routes
app.get('/', (req, res)=>{
    res.send('Welcome to my page');
});

// Mongo db connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log('Connected to MongoDB Atlas'))
    .catch((error)=>console.error(error));



app.listen(port, ()=>console.log('server listening on port', port));