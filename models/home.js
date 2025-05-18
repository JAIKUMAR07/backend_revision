const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');

const p = path.join(rootDir, 'data', 'homes.json');

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    let homes = [];
    try {
      const fileContent = fs.readFileSync(p);
      homes = JSON.parse(fileContent);
    } catch (err) {
      homes = [];
    }
    homes.push(this);
    fs.writeFileSync(p, JSON.stringify(homes));
  }

  static fetchAll() {
    try {
      const fileContent = fs.readFileSync(p);
      return JSON.parse(fileContent);
    } catch (err) {
      return [];
    }
  }
};
