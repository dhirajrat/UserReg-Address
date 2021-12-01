const userModel = require("../models/user.js");
const utility = require("../utility/utility");

class userService {
  // addAddress = (user, callback) => {
  //   userModel.addAddress(user, (err, data) => {
  //     if (err) {
  //       return callback(err, null);
  //     } else {
  //       return callback(null, data);
  //     }
  //   });
  // };

  registerUser = (user, callback) => {
    utility.hashing(user.password, (err, hashpass) => {
      if (err) {
        return callback(err, null);
      } else {
        user.password = hashpass;

        userModel.registerUser(user, (err, data) => {
          if (err) {
            return callback(err, null);
          } else {
            return callback(null, data);
          }
        });
      }
    });
  };

  addAddress = (user, callback) => {
    userModel.addAddress(user, (err, data) => {
      if (err) {
        return callback(err, null);
      } else {
        return callback(null, data);
      }
    });
  };

  getAddress = (user, callback) => {
    userModel.getAddress(user, (err, data) => {
      if (err) {
        return callback(err, null);
      } else {
        return callback(null, data);
      }
    });
  };

  getAddressByCategory = (user, callback) => {
    userModel.getAddressByCategory(user, (err, data) => {
      if (err) {
        return callback(err, null);
      } else {
        const filtdata = [];
        console.log("data len: ", data.address.length);
        for (let i = 0; i < data.address.length; i++) {
          let keys = Object.keys(data.address[i]);
          console.log("cate : ", user.category);
          console.log("keys : ", keys);
          for (let j = 0; j < keys.length; j++) {
            if (keys[j] == user.category) {
              filtdata.push(data.address[i]);
            }
          }
        }
        return callback(null, filtdata);
      }
    });
  };
}

module.exports = new userService();
