exports.errorPage = (req, res, next) => {
  res.status(404).render("404", {
    message: "Page not found",
    pageTitle: "404 Error",
  });
};
