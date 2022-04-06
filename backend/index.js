const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const leaveRoute = require('./routes/leaveRoute')
const Mongoose = require("mongoose");

const app = express();

/*
const {google} = require("googleapis");
const {OAuth2} = google.auth
const oAuth2client = new OAuth2(process.env.GOOGLE_ID, process.env.GOOGLE_SECRET);
oAuth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});

const calender = google.calender({version: 'v3', oAuth2Client});
const eventStart = req.body.leave_start;
const eventEnd = req.body.leave_end;

const event = {
    summary : "Leave Request",
    location: " ",
    descriptio: ` ${req.body.employee_name} Leave Request`,
    start:{
        dateTime: eventStartTime,
        timeZone:'UTC',

    },
    endTime: {
        dateTime: eventEndTime,
        timeZone: 'UTC'
    },
    colorId: 1,
    
}

calender.freebusy.query({
    resource:{
        timeMin: eventStartTime,
        timeMax:eventEndTime,
        timeZone: 'UTC',
        items: [{id: 'primary'}],
    }
}, (err, req)=> {
    if(err) return console.error("Query error", err)
    const eventsArr = res.data.calendes.primary.busy
    if(eventsArr.length === 0) return calender.events.insert({
        calenderId: 'primary',
        resource: event
    }, err => {
        if(err) return console.error('calender event creation error', err)

        return console.log("calender event created", event)
    })
    return console.log(`busy on this day`)
})

*/

dotenv.config();
app.use(cors());
app.use(express.json());




//DATABASE CONNECTION

Mongoose
.connect(process.env.MONGO)
        .then(()=>{console.log("successfully connected to database")})
        .catch((err)=>{console.log("database connection failed")});


//ROUTES
app.use("/api/request",leaveRoute);



//SETTING UP LOCAL SERVER
try{
app.listen(process.env.PORT || 5050, () => console.log('server successfuly online'))
}catch(e){
    res.status(500).send("server error")
    console.log(e);
}
