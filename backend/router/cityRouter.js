import express from "express";
import expressAsyncHandler from "express-async-handler";
import City from "../model/cityModel.js";

const cityRouter = express.Router();

cityRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    try {
      const city = await City.find({});
      return res.status(200).send(city);
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
cityRouter.post(
  "/add",
  expressAsyncHandler(async (req, res) => {
    const reqcity = req.body.name;
    let lowecity = reqcity.toLowerCase();
    const upercasetype = lowecity.charAt(0).toUpperCase() + lowecity.slice(1);
    try {
      const city = await City.findOne({ name: upercasetype });
      if (city) {
        return res.status(400).send({ message: "City already Exits" });
      }
      const newCity = new City({
        name: upercasetype,
      });
      await newCity.save();
      return res.status(201).send({ message: "New City added successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
cityRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const cityid = req.params.id;
    try {
      const city = await City.findById(cityid);
      if (!city) {
        return res.status(400).send({ message: "City Not Exist" });
      }
      await city.remove();
      return res.status(200).send({ message: "Deleted Successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
cityRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const cityid = req.params.id;
    const reqcity = req.body.name;
    const lowercity = reqcity.toLowerCase();
    const upercity = lowercity.charAt(0).toUpperCase() + lowercity.slice(1);
    try {
      const city = await City.findById(cityid);
      const cityname = await City.findOne({ name: upercity });
      if (!city) {
        return res.status(404).send({ message: "City Not Exits" });
      }
      if (cityname) {
        return res.status(404).send({ message: "City Already Exits" });
      }
      city.name = upercity;
      city.save();
      return res.status(201).send({ message: "City updated Successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
export default cityRouter;
