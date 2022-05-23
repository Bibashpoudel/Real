import express from "express";
import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";

const app = express();

// connecting to mongoo database
mongoose
  .connect(process.env.MONGODB_URL || "mongodb://localhost/realstate", {
    useNewUrlParser: true, //to get ride from duplicate waring
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));

app.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    res.status(200).send("hello server open");
  })
);

app.listen(5002, () => {
  console.log("server is running at " + "http://localhost:5002");
});
