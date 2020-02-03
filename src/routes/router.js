const main = require("./main/main-route");
const userSignUp = require("./users/signup-route");
const products = require("./products/products-route");

const routes = {
  "/signup": userSignUp,
  "/products": products,
  default: main
};

module.exports = routes;
