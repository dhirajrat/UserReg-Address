const userService = require("../service/user.js");
const validation = require("../utility/validation");

class Controller {
  // getAddress = (req, res) => {
  //   try {
  //     const user = {
  //       email: req.body.email,
  //     };

  //     userService.getAddress(user, (error, data) => {
  //       if (error) {
  //         return res.send({
  //           success: false,
  //         });
  //       } else {
  //         return res.send({
  //           success: true,
  //         });
  //       }
  //     });
  //   } catch (error) {
  //     return res.status(500).json({
  //       success: false,
  //       data: null,
  //       message: "server-error",
  //     });
  //   }
  // };

  register = (req, res) => {
    try {
      const user = {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password,
      };

      const validUser = validation.authRegister.validate(user);
      if (validUser.error) {
        console.log(validUser.error);
        return res.status(400).send({
          success: false,
          message: "Invalid Input",
          data: validUser,
        });
      }

      userService.registerUser(user, (error, data) => {
        if (error) {
          return res.status(409).json({
            success: false,
            message: "User Already Exist",
          });
        } else {
          return res.status(201).json({
            success: true,
            message: "User Data Inserted successfully",
          });
        }
      });

      console.log(JSON.stringify(user));
    } catch (error) {
      return res.status(500).json({
        success: false,
        data: null,
        message: "server-error",
      });
    }
  };

  addAddress = (req, res) => {
    try {
      const user = {
        email: req.body.email,
        address: req.body.address,
      };

      userService.addAddress(user, (error, data) => {
        if (error) {
          return res.send({
            success: false,
            message: "User Can't Find with credentials",
          });
        } else {
          return res.send({
            success: true,
          });
        }
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        data: null,
        message: "server-error",
      });
    }
  };

  getAddress = (req, res) => {
    try {
      const user = {
        email: req.body.email,
      };

      userService.getAddress(user, (error, data) => {
        if (error) {
          return res.send({
            success: false,
            message: "User Can't Find with credentials",
          });
        } else {
          return res.send({
            success: true,
            address: data.address,
          });
        }
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        data: null,
        message: "server-error",
      });
    }
  };

  getAddressByCategory = (req, res) => {
    try {
      const user = {
        email: req.body.email,
        category: req.body.category,
      };

      userService.getAddressByCategory(user, (error, data) => {
        if (error) {
          return res.send({
            success: false,
          });
        } else {
          return res.send({
            success: true,
            data: data,
          });
        }
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        data: null,
        message: "server-error",
      });
    }
  };
}

module.exports = new Controller();
