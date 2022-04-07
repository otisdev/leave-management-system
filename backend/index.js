const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const leaveRoute = require('./routes/leaveRoute')
const Mongoose = require("mongoose");
const app = express();



dotenv.config();
app.use(cors());
app.use(express.json());




//DATABASE CONNECTION

Mongoose
.connect(process.env.MONGO)
        .then(()=>{console.log("successfully connected to database")})
        .catch((err)=>{console.log("database connection failed")});


//ROUTES
app.use("/api/request",leaveRoute );



//SETTING UP LOCAL SERVER
try{
app.listen(process.env.PORT || 5050, () => console.log('server successfuly online'))
}catch(e){
    res.status(500).send("server error")
    console.log(e);
}
