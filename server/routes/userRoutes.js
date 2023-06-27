const express = require('express');
const {loginController, registerController}  = require('../controllers/userController')



// router object 

const router = express.Router()
 
// routes

// Login // post
router.post('/login', loginController)



// REGISTER // POST

router.post('/register', registerController)






module.exports = router


