const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const expressValidator= require('express-validator');

dotenv.config()

//db
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB connected"));
mongoose.now("error", err=>{
    console.log(`DB connection error:${err.message}`);
});

// import routes
const postRoutes = require('./routes/post');
// const { default: mongoose } = require('mongoose');

const app = express();
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(expressValidator())
app.use(postRoutes)

const port = process.env.PORT || 8080
app.listen(port, ()=>console.log(`listening at port:${port}`));
