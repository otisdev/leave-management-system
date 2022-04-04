const mongoose = require('mongoose');

const LeaveSchema = new mongoose.Schema({
    employee_id : {
        type: String, required: true
    },
    employee_name: {
        type: String, required: true
    },
    employee_lastname: {
        type: String, required: true
    },
    leave_days: {
        type: String, required: true
    },
    leave_type: {
        type: String, required: true,
    }
    ,
    Status : { 
        type: String, default: "pending"
    },
    reason : { type : String}
})

module.exports = mongoose.model("Leave", LeaveSchema);