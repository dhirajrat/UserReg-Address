const bcrypt = require("bcrypt");

class Utility {
  hashing = (password, callback) => {
    bcrypt.hash(password, 10, (err, hashedpassword) => {
      if (err) {
        return callback("Error in hashing", null);
      } else {
        return callback(null, hashedpassword);
      }
    });
  };
}

module.exports = new Utility();
