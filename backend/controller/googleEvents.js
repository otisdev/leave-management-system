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
    description: ` ${req.body.employee_name} Leave Request`,
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

module.exports = calender;