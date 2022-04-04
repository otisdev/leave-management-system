const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(cors());

try{
app.listen(process.env.PORT || 5000, () => console.log('server successfuly online'))
}catch(e){
    res.status(500).send("server error")
    console.log(e);
}
