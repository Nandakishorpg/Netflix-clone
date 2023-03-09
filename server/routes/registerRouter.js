const registerRouter = require("express").Router();
const { set } = require("mongoose");
const register = require("../models/UserRegister");

const multer = require('multer');
const mongoose = require('mongoose');

// setupMulter

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
  });
  const upload = multer({ storage: storage });

// Registration-------------------------------------------------------------
registerRouter.post("/userRegister",upload.single('profilePic'), async (req, res) => {
  // console.log(req.body);
  //   const { username, email, password } = req.body;
  const registerData = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    profilePic:req.file.filename
  };
  console.log("registerData", registerData);

  //Checking username/email present on the register DB document-----------
  const existingUser = await register.findOne({
    $or: [{ username: registerData.username }, { email: registerData.email }],
  });
  console.log("existingUser", existingUser);

  if (!existingUser) {
    let register_item = register(registerData);
    register_item.save().then(() => {
      res.status(200).send({
        success: true,
        error: false,
        message: "Success",
      });
    });
  } else {
    res.status(404).send({
      success: false,
      error: true,
      message: "Username or email already registered",
    });
  }

 
});

//updation----------------------------------------------------------------
// registerRouter.post('/update',(req,res)=>{
//     let fetchedUser=req.body.username
//     register.updateOne({username:fetchedUser},{$set:{username:"fasil"}}).then((updatedStatus)=>{
//         return res.status(200).json({
//             success: true,
//             error: false,
//             message: "Approved And Updated",
//             data: updatedStatus,
//           });
//     })

// })

module.exports = registerRouter;
