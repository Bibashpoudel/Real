import express from "express";
import expressAsyncHandler from "express-async-handler";
import Purpose from "../model/property/purposeModel.js";

const purposesRouter = express.Router();

purposesRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    try {
      const purpose = await Purpose.find({});
      return res.status(200).send(purpose);
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
purposesRouter.post(
  "/add",
  expressAsyncHandler(async (req, res) => {
    const reqpurpose = req.body.name;
    let lowepurpose = reqpurpose.toLowerCase();
    const upercasetype =
      lowepurpose.charAt(0).toUpperCase() + lowepurpose.slice(1);
    try {
      const purpose = await Purpose.findOne({ name: upercasetype });
      if (purpose) {
        return res.status(400).send({ message: "purpose already Exits" });
      }
      const newpurpose = new Purpose({
        name: upercasetype,
      });
      await newpurpose.save();
      return res
        .status(201)
        .send({ message: "New purpose added successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
purposesRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const purposeid = req.params.id;
    try {
      const purpose = await Purpose.findById(purposeid);
      if (!purpose) {
        return res.status(400).send({ message: "purpose Not Exist" });
      }
      await purpose.remove();
      return res.status(200).send({ message: "Deleted Successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
purposesRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const purposeid = req.params.id;
    const reqpurpose = req.body.name;
    const lowerpurpose = reqpurpose.toLowerCase();
    const uperpurpose =
      lowerpurpose.charAt(0).toUpperCase() + lowerpurpose.slice(1);
    try {
      const purpose = await Purpose.findById(purposeid);
      const purposename = await Purpose.findOne({ name: uperpurpose });
      if (!purpose) {
        return res.status(404).send({ message: "purpose Not Exits" });
      }
      if (purposename) {
        return res.status(404).send({ message: "purpose Already Exits" });
      }
      purpose.name = uperpurpose;
      purpose.save();
      return res.status(201).send({ message: "purpose updated Successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
export default purposesRouter;
