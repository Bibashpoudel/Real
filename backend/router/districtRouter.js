import express from "express";
import expressAsyncHandler from "express-async-handler";
import District from "../model/districtModel.js";

const districtRouter = express.Router();

districtRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    try {
      const district = await District.find({});
      return res.status(200).send(district);
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
districtRouter.post(
  "/add",
  expressAsyncHandler(async (req, res) => {
    const reqdistrict = req.body.name;
    let lowedistrict = reqdistrict.toLowerCase();
    const upercasetype =
      lowedistrict.charAt(0).toUpperCase() + lowedistrict.slice(1);
    try {
      const district = await District.findOne({ name: upercasetype });
      if (district) {
        return res.status(400).send({ message: "District already Exits" });
      }
      const newdistrict = new District({
        name: upercasetype,
      });
      await newdistrict.save();
      return res
        .status(201)
        .send({ message: "New District added successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
districtRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const districtid = req.params.id;
    try {
      const district = await District.findById(districtid);
      if (!district) {
        return res.status(400).send({ message: "District Not Exist" });
      }
      await district.remove();
      return res.status(200).send({ message: "Deleted Successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
districtRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const districtid = req.params.id;
    const reqdistrict = req.body.name;
    const lowerdistrict = reqdistrict.toLowerCase();
    const uperdistrict =
      lowerdistrict.charAt(0).toUpperCase() + lowerdistrict.slice(1);
    try {
      const district = await District.findById(districtid);
      const districtname = await District.findOne({ name: uperdistrict });
      if (!district) {
        return res.status(404).send({ message: "District Not Exits" });
      }
      if (districtname) {
        return res.status(404).send({ message: "District Already Exits" });
      }
      district.name = uperdistrict;
      district.save();
      return res.status(201).send({ message: "District updated Successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
export default districtRouter;
