import bodyParser from "body-parser";
import express from "express";
import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";
import typesRouter from "./router/typesRouter.js";

const app = express();

//request parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.use("/types", typesRouter);

app.listen(5002, () => {
  console.log("server is running at " + "http://localhost:5002");
});
