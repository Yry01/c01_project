// import modules
const express  = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors  = require('cors');

require('dotenv').config();
//app
const app = express();
app.use(express.json());
//db

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(()=> console.log("DB CONNECTED")).catch(err=>console.log("DB CONNECTION", err));



require('dotenv').config();



// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(bodyParser.json());




  









//middleware
app.use(morgan("dev"));
app.use(cors({origin: true, credentials: true}));






//routes

const testRoutes = require("./routes/signup");
app.use("/", testRoutes);




const loginRoutes = require("./routes/login");
app.use("/",loginRoutes);

const deleteUserRoutes = require("./routes/deleteUser");
app.use("/", deleteUserRoutes);

const userRoutes = require("./routes/edit");
app.use("/", userRoutes);




//port
const port = process.env.PORT || 8080; // process.env.PORT

// listener
const server = app.listen(port, ()=>
    console.log(`System is running on port ${port}`)
);
