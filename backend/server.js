const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./routes/ToDoRoute');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log(`Connected to mongoose...`))
.catch((err)=>console.log(err));

// app.use(router);

app.listen(PORT,(req, res)=>{
    console.log("Server is running...");
})