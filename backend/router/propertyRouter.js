import express from "express";
import expressAsyncHandler from "express-async-handler";
import Property from "../model/propertyModel";

const propertyRouter = express.Router();

propertyRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const min =
      req.query.min && Number(req.query.min) !== 0 ? Number(req.query.min) : 0;
    const max =
      req.query.max && Number(req.query.max) !== 0 ? Number(req.query.max) : 0;

    const priceFilter = min && max ? { price: { $gte: min, $lte: max } } : {};

    const property = await Property.find({
      ...priceFilter,
    })
      .populate("state", "name")
      .populate("district", "name")
      .populate("city", "name")
      .populate("purpose", "name")
      .populate("type", "name")
      .populate("tag", "name");

    res.status(200).send(property);
  })
);
