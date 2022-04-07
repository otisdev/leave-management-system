const express = require('express');
const router = express.Router();
const Leave = require("../models/Leave");

const {google} = require("googleapis");
const {OAuth2} = google.auth
const oAuth2Client = new OAuth2(process.env.GOOGLE_ID, process.env.GOOGLE_SECRET);
oAuth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});

const calender = google.calender('v3');
const eventStart = req.body.leave_start;
const eventEnd = req.body.leave_end;

//POST LEAVE REQUEST

router.post("/", async (req,res)=>{
    const leave = new Leave(req.body);

    try{
        const savedLeave = await leave.save()
        res.status(200).send(savedLeave);
        
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})

//UPDATE LEAVE REQUEST

router.put("/:id", async(req,res) => {

    try{
      const updateLeave = await Leave.findByIdAndUpdate(
        req.params.id,
        {
            $set : req.body.employee_id,
        },
        {
            new: true
        }
    );  
    }catch(e){
        res.status(500).send("something went wrong :(")
        console.log(e);
    }
    
});

//GET ALL LEAVE REQUESTS

router.get("/", async(req,res)=>{
    try{
        const leave = await Leave.find();
        res.status(200).send(leave);

    }catch(e){
        res.status(500).send("something went wrong");
        console.log(e);
    
    }
})

module.exports = router;