const express = require('express');
const router = express.Router();
const Leave = require("../models/Leave");

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