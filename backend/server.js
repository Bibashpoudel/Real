import bodyParser from "body-parser";
import express from "express";
import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";
import districtRouter from "./router/districtRouter.js";
import otpRouter from "./router/otpRouter.js";
import purposesRouter from "./router/purposeRouter.js";
import subcityRouter from "./router/cityRouter.js";
import tagRouter from "./router/tagRouter.js";
import typesRouter from "./router/typesRouter.js";
import userRouter from "./router/userRouter.js";
import cityRouter from "./router/cityRouter.js";
import stateRouter from "./router/stateRouter.js";

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

app.use("/type", typesRouter);
app.use("/tag", tagRouter);
app.use("/purpose", purposesRouter);
app.use("/state", stateRouter);
app.use("/district", districtRouter);
app.use("/city", cityRouter);
app.use("/otp", otpRouter);
app.use("/user", userRouter);

app.listen(5002, () => {
  console.log("server is running at " + "http://localhost:5002");
});
