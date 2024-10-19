const rootDir = require("../utils/path");
const fs = require("fs");
const path = require("path");

const getProductsFromFile = (cb) => {
  const p = path.join(rootDir, "data", "products.json");
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(productName) {
    this.title = productName;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
