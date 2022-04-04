const express = require('express');
const router = express.Router();
const Leave = require("../models/Leave");

//POST LEAVE REQUEST

router.post("/", async (req,res)=>{
    const leave = new Leave(req.body);

    try{
        const savedLeave = await leave.save();
        res.status(200).send(savedLeave);
    }catch(e){
        console.log(e);
        res.status(200).send(e);
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
    }
    
});

//GET ALL LEAVE REQUESTS

router.get("/", async(req,res)=>{
    try{
        const orders = await Leave.find();
    }catch(e){
        res.status(500).send("something went wrong");
    }
})

