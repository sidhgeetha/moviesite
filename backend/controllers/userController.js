// const User = require("../models/user");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const config = require("../utils/config");

// const userController = {
//   signup: async (request, response) => {
//     try {
//       const { username, password, name } = request.body;

//       const existingUser = await User.findOne({ username });
//       if (existingUser) {
//         return response.status(400).json({ error: "User already exists" });
//       }

//       const passwordHash = await bcrypt.hash(password, 10);

//       const newUser = new User({
//         username,
//         passwordHash,
//         name,
//       });

//       //save user to db
//       const savedUser = await newUser.save();

//       // retrun saved user
//       savedUser.passwordHash = response.json({
//         message: "User created",
//         user: {
//           userName: savedUser.username,
//           name: savedUser.name,
//           location: savedUser.location,
//           role: savedUser.role,
//         },
//       });
//     } catch (error) {
//       response.status(500).json({ message: error.message });
//     }
//   },
//   signin: async (request, response) => {
//     try {
//       // get the username and password from the request body
//       const { username, password } = request.body;

//       // check if the user exists in the database
//       const user = await User.findOne({ username });

//       // if the user does not exist, return an error
//       if (!user) {
//         return response.status(400).json({ message: "User not found" });
//       }

//       // if the user exists, check if the password is correct
//       const passwordCorrect = await bcrypt.compare(password, user.passwordHash);

//       // if the password is incorrect, return an error
//       if (!passwordCorrect) {
//         return response.status(400).json({ message: "Invalid password" });
//       }

//       // if the password is correct, generate a token and return it
//       const token = jwt.sign(
//         {
//           username: user.username,
//           id: user._id,
//           name: user.name,
//         },
//         config.JWT_SECRET
//       );

//       // set a cookie with the token
//       response.cookie("token", token, {
//         httpOnly: true,
//         sameSite: "none",
//         expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
//         secure: true,
//       });

//       response.json({ message: "User logged in", token });
//       // response.set("Access-Control-Allow-Origin", "*");
//       // response.headers.append("Access-Control-Allow-Headers", "*");
//       // response.headers.append("Access-Control-Allow-Methods", "*");
//     } catch (error) {
//       response.status(500).json({ message: error.message });
//     }
//   },

//   getUser: async (request, response) => {
//     try {
//       // get the user id from the request
//       const userId = request.userId;
//       const token = request.cookies.token;

//       // get the user from the database
//       const user = await User.findById(userId).select(
//         "-passwordHash -__v -_id"
//       );

//       // if the user does not exist, return an error
//       if (!user) {
//         return response.status(400).json({ message: "User not found" });
//       }

//       // return the user
//       response.json({ messsage: "User found", user });
//     } catch (error) {
//       response.status(500).json({ message: error.message });
//     }
//   },
//   logout: async (request, response) => {
//     try {
//       // clear the token cookie
//       response.clearCookie("token");

//       //return a message
//       response.json({ message: "User  logged out" });
//     } catch (error) {
//       response.status(500).json({ message: error.message });
//     }
//   },
// };

// module.exports = userController;

const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");

const userController = {
  signup: async (request, response) => {
    // response.json({message:'User signed up'})
    try {
      //get user inpiut
      const { username, password, name,location, role } = request.body;

      const user = await User.findOne({ username });

      //if user exists

      if (user) {
        return response.status(400).json({ message: "User already exists" });
      }

      //if new user or not already exists

      //hash the  password
      const passwordHash = await bcrypt.hash(password, 10);

      const newUser = new User({
        username,
        passwordHash,
        name,
        location, 
        role
      });

      const savedUser = await newUser.save();

// remove password from saved user
    //   savedUser.passwordHash =  undefined;

      response.json({ message: "user created", user: {
   username:savedUser.username,
   name: savedUser.name,
   location:  savedUser.location,
   role: savedUser.role,
    } });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },

  signin: async (request, response) => {
    try {
      const { username, password } = request.body;

      const user = await User.findOne({ username });

      if (!user) {
        return response.status(400).json({ message: "User not found" });
      }

      const passwordCorrect = await bcrypt.compare(password, user.passwordHash);

      if (!passwordCorrect) {
        return response.status(400).json({ message: "Invalid password" });
      }

      const token = jwt.sign(
        {
          username: user.username,
          id: user._id,
          name: user.name,
        },
        config.JWT_SECRET
      );

     // set a cookie with the token
            response.cookie("token", token, {
              httpOnly: true,
              sameSite: "none",
              expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours f
              secure: true,
            });

      response.json({ message: "User logged in", token });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },

    getUser: async (request, response) => {
      try {
        // get the user id from the request
        const userId = request.userId;
        // const token = request.cookies.token;

        // get the user from the database
     

          const user = await User.findById(userId).select(
            "-passwordHash -__v -_id"
          );
        

        // if the user does not exist, return an error
        if (!user) {
          return response.status(400).json({ message: "User not found" });
        }

        // return the user
        response.json({ messsage: "User found", user });
      } catch (error) {
        response.status(500).json({ message: error.message });
      }
    },
};

module.exports = userController;
