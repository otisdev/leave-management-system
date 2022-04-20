const { default: mongoose } = require('mongoose');
const moongose  = require('mongoose');

const UserSchema = new mongoose.Schema({

    name:{ type: String, required: true},
    lastname:{ type: String, required: true},
    username:{type: String, required: true, unique: true},
    password:{type: Number, required: true },
    paid: {type: Number, default: 30},
    unpaid: {type: Number, default: 50},
    isAdmin : { type: Boolean, default : false}

},
{timestamps:true}
);

module.exports = mongoose.model("User", UserSchema);