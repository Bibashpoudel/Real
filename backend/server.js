import express from "express";
import expressAsyncHandler from "express-async-handler";

const app = express();

app.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    res.status(200).send("hello server open");
  })
);

app.listen(5002, () => {
  console.log("server is running at " + "http://localhost:5002");
});
