const mongoose = require('mongoose');

const LeaveSchema = new mongoose.Schema({
  
    employee_name: {
        type: String, required: true
    },
    employee_lastname: {
        type: String, required: true
    },
    leave_days: {
        type: String, required: true
    },
    leave_start: {
        type: Date, required: true
    },
    leave_end: {
        type: Date, required: true
    },
    leave_type: {
        type: String, required: true,
    }
    ,
    Status : { 
        type: String, default: "pending"
    },
    reason : { type : String},
},
{timestamps:true});

module.exports = mongoose.model("Leave", LeaveSchema);