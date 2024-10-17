const products = [];

module.exports = class Product {
  constructor(productName) {
    this.title = productName;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
};
