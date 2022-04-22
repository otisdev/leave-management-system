const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const leaveRoute = require('./routes/leaveRoute')
const Mongoose = require("mongoose");
const app = express();
const google = require("./controller/googleEvents")
const userRoute = require("./routes/userRoute");
const { application } = require('express');

dotenv.config();
app.use(cors());
app.use(express.json());





//DATABASE CONNECTION
Mongoose
.connect(process.env.MONGO)
        .then(()=>{console.log("successfully connected to database")})
        .catch((err)=>{console.log("database connection failed")});


//ROUTES
app.use("/api/request",leaveRoute,google );
app.use("/api/user",userRoute);


//SETTING UP LOCAL SERVER
try{
app.listen(process.env.PORT || 5050, () => console.log('server successfully online'))
}catch(e){
    res.status(500).send("server error")
    console.log(e);
}
