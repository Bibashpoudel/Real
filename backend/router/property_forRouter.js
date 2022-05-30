import express from "express";
import expressAsyncHandler from "express-async-handler";
import Property_for from "../model/property/property_forModel.js";

const property_forRouter = express.Router();

property_forRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    try {
      const property_for = await Property_for.find({});
      return res.status(200).send(property_for);
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);

property_forRouter.post(
  "/add",
  expressAsyncHandler(async (req, res) => {
    const reqproperty_for = req.body.name;
    const lowerproperty_for = reqproperty_for.toLowerCase();
    const uperproperty_for =
      lowerproperty_for.charAt(0).toUpperCase() + lowerproperty_for.slice(1);
    try {
      const property_for = await Property_for.findOne({
        name: uperproperty_for,
      });
      if (property_for) {
        return res.status(400).send({ message: "property_for already exits" });
      }
      const newproperty_for = new property_for({
        name: uperproperty_for,
      });
      await newproperty_for.save();
      return res
        .status(201)
        .send({ message: "property_for added successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
property_forRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const property_forid = req.params.id;
    const reqproperty_for = req.body.name;
    const lowerproperty_for = reqproperty_for.toLowerCase();
    const uperproperty_for =
      lowerproperty_for.charAt(0).toUpperCase() + lowerproperty_for.slice(1);
    try {
      const property_for = await Property_for.findById(property_forid);
      const property_forname = await Property_for.findOne({
        name: uperproperty_for,
      });
      if (!property_for) {
        return res.status(404).send({ message: "No property_for Found" });
      }
      if (property_forname) {
        return res.status(400).send({ message: "property_for already exits" });
      }
      property_for.name = uperproperty_for;
      await property_for.save();
      return res
        .status(200)
        .send({ message: "property_for updated Successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
property_forRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const property_forid = res.params.id;
    try {
      const property_for = await Property_for.findById(property_forid);
      if (!property_for) {
        return res.status(404).send({ message: "No property_for Found" });
      }
      await property_for.remove();
      return res
        .status(200)
        .send({ message: "property_for deleted successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);

export default property_forRouter;
