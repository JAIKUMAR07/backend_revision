const Home = require('../models/home');

exports.getAddHome = (req, res) => {
  res.render('host/addHome', {
    pageTitle: 'Add New Home',
    path: '/host/add-home',
    currentPage: 'addHome'
  });
};

exports.getHostHomes = (req, res) => {
  const homes = Home.fetchAll();
  res.render('host/hostHomeList', {
    homes: homes,
    pageTitle: 'Your Homes',
    path: '/host/host-home-list',
    currentPage: 'host-homes'
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();

  res.render("host/home-added", {
    pageTitle: "Home Added Successfully",
    currentPage: "homeAdded",
  });
};
