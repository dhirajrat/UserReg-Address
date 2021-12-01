const controller = require("../controllers/user");

module.exports = (app) => {
  // Post: User Registration
  app.post("/register", controller.register);

  // add Address of any categories
  app.post("/addaddress", controller.addAddress);

  // Get add Category of addresses
  app.get("/getaddress", controller.getAddress);

  //Get Address By Category
  app.get("/getaddressbycategory", controller.getAddressByCategory);
};
