const path = require("path");
const express = require("express");
const userRouter = require("./backend_revision/routes/userRouter");
const hostRouter = require("./backend_revision/routes/hostRouter");
const app = express();
const rootDir = require("./backend_revision/config/utils/pathUtil");
app.use(express.urlencoded());

app.use(userRouter);

app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log("server to chal rha hai  ", PORT);
});
