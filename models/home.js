const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const homeDataPath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  constructor(houseName) {
    this.houseName = houseName;
  }

  save() {
    let homes = [];
    try {
      const fileContent = fs.readFileSync(homeDataPath);
      homes = JSON.parse(fileContent);
    } catch (error) {
      homes = [];
    }
    
    homes.push(this);
    fs.writeFileSync(homeDataPath, JSON.stringify(homes));
  }

  static fetchAll() {
    try {
      const fileContent = fs.readFileSync(homeDataPath);
      return JSON.parse(fileContent);
    } catch (error) {
      return [];
    }
  }
};
