const express = require("express");
const router = express.Router() 
const {google} = require('googleapis');
require('dotenv').config();
const { OAuth2 } = google.auth

const oAuth2Client = new OAuth2(
  process.env.GOOGLE_ID,
  process.env.GOOGLE_SECRET
)

oAuth2Client.setCredentials({
  refresh_token: process.env.AUTH_REFRESH,
})

const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })

 router.post("/", async (req,res)=>{
    try{
        const event = {
            summary: `Leave Request`,
            description: `request for leave by ${req.body.employee_name}.`,
            colorId: 1,
            start: {
              dateTime: new Date(req.body.leave_start),
              timeZone: 'UTC',
            },
            end: {
              dateTime: new Date(req.body.leave_end),
              timeZone: 'UTC',
            },
          }
          
        await  calendar.freebusy.query(
            {
              resource: {
                timeMin: new Date(req.body.leave_start),
                timeMax: new Date(req.body.leave_end),
                timeZone: 'UTC',
                items: [{ id: 'primary' }],
              },
            },
            (err, res) => {
              if (err) return console.error(err)
          
              const eventArr = res.data.calendars.primary.busy
          
              if (eventArr.length === 0)
                return calendar.events.insert(
                  { calendarId: 'primary', resource: event },
                  err => {
                    if (err) return console.error('Error Creating Calender Event:', err)
                    return console.log('shazam event created.')
                  }
                )
          
              return console.log(`date occupied...`)
            }
          )
         
    }catch(e){
        console.log("puwm, pushm", e)
    }
})


module.exports = router;