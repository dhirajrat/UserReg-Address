const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    // address: {
    //   type: Object,
    //   required: true,

    //   // home: { type: String, required: true },
    //   // work: { type: String, required: true },
    // },
    address: {
      type: [{ type: Object }],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("user", userSchema);

class userModel {
  // addAddress = (userDetails, callback) => {
  //   try {
  //     user.findOneAndUpdate(
  //       { email: userDetails.email },
  //       {
  //         address: {
  //           home: userDetails.address.home,
  //           work: userDetails.address.work,
  //         },
  //       },
  //       { new: true },
  //       (error, data) => {
  //         if (error) {
  //           console.log("error");
  //           callback(error, null);
  //         } else {
  //           console.log(data);
  //           if (data != null) {
  //             callback(null, data);
  //           } else {
  //             console.log("data null");
  //             callback("data null", null);
  //           }
  //         }
  //       }
  //     );
  //   } catch (error) {
  //     return callback("Internal Error", null);
  //   }
  // };

  registerUser = (userDetails, callback) => {
    try {
      const newUser = new user({
        name: userDetails.name,
        email: userDetails.email,
        mobile: userDetails.mobile,
        // address: userDetails.address,
        password: userDetails.password,
      });

      newUser.save((error, data) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, data);
        }
      });
    } catch (error) {
      return callback("Internal Error", null);
    }
  };

  addAddress = (userDetails, callback) => {
    try {
      console.log("96 : ", userDetails);

      user.findOneAndUpdate(
        { email: userDetails.email },
        {
          // address: {
          //   // home: userDetails.address.home,
          //   // work: userDetails.address.work,
          // },

          $push: { address: { $each: userDetails.address } },
        },
        { new: true },
        (error, data) => {
          if (error) {
            console.log(error);
            callback(error, null);
          } else {
            console.log(data);
            if (data != null) {
              callback(null, data);
            } else {
              console.log("data null");
              callback("data null", null);
            }
          }
        }
      );
    } catch (error) {
      return callback("Internal Error", null);
    }
  };

  getAddress = (userDetails, callback) => {
    try {
      user.findOne({ email: userDetails.email }, (error, data) => {
        if (error) {
          console.log("error");
          callback(error, null);
        } else {
          console.log(data);
          if (data != null) {
            callback(null, data);
          } else {
            console.log("data null");
            callback("data null", null);
          }
        }
      });
    } catch (error) {
      return callback("Internal Error", null);
    }
  };

  getAddressByCategory = (userDetails, callback) => {
    try {
      user.findOne({ email: userDetails.email }, (error, data) => {
        if (error) {
          console.log("error");
          callback(error, null);
        } else {
          console.log(data);
          if (data != null) {
            callback(null, data);
          } else {
            console.log("data null");
            callback("data null", null);
          }
        }
      });
    } catch (error) {
      return callback("Internal Error", null);
    }
  };
}

module.exports = new userModel();
