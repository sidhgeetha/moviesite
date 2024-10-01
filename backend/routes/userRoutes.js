const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

const userRouter = express.Router();

//deifne endpoints

userRouter.post ('/signup' , userController.signup);
userRouter.post('/signin', userController.signin);
userRouter.get("/getUser", auth.verifyToken, userController.getUser);
// userRouter.get("/logout", userController.logout);

// // userRouter.get("/getUser", userController.getUser);

// module.exports = userRouter;


//export router
module.exports = userRouter;