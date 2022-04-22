const User = require("../models/User");
const router = require("express").Router();


//REGISTER
router.post("/register", async (req,res) => {
  const newUser = new User({
    name: req.body.name,
    lastname: req.body.lastname,
    username: req.body.username,
    password: req.body.password,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req,res) => {
    try{
        const user = await User.findOne(
            {
                username: req.body.username
            }
        );

        if(!user){
          return res.status(401).json("Wrong credentials");
        } 

        const Password = user.password
        


        const originalPassword = Password

        const inputPassword = req.body.password;
        
        if(Password != inputPassword){
          return res.status(401).json("Wrong Password");
        }

     
      const { password, ...others } = user._doc;  
      res.status(200).json({...others});

    }catch(err){
        console.log(err)
        res.status(500).json(err);
    }

});

//UPDATE DAYS

router.put("/:id", async (req, res,next)=>{
  try{
    const updateDays = await User.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        }, 
        {new: true}
    );
    
    res.status(200).send(updateDays);
  }catch(e){
    res.status(500).send(e)
  }
  
    
})

module.exports = router;