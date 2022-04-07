const express = require('express');
const router = express.Router();
const Leave = require("../models/Leave");

const {google} = require('googleapis');
const { createNextState } = require('@reduxjs/toolkit');
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





//POST LEAVE REQUEST

router.post("/", async (req,res, next)=>{
    const leave = new Leave(req.body);

    try{
        const savedLeave = await leave.save()
        res.status(200).send(savedLeave);

        next()
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