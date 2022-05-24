import express from "express";
import expressAsyncHandler from "express-async-handler";
import State from "../model/stateModel.js";

const stateRouter = express.Router();

stateRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    try {
      const state = await State.find({});
      return res.status(200).send(state);
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
stateRouter.post(
  "/add",
  expressAsyncHandler(async (req, res) => {
    const reqstate = req.body.name;
    let lowestate = reqstate.toLowerCase();
    const upercasetype = lowestate.charAt(0).toUpperCase() + lowestate.slice(1);
    try {
      const state = await State.findOne({ name: upercasetype });
      if (state) {
        return res.status(400).send({ message: "State already Exits" });
      }
      const newstate = new State({
        name: upercasetype,
      });
      await newstate.save();
      return res.status(201).send({ message: "New state added successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
stateRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const stateid = req.params.id;
    try {
      const state = await State.findById(stateid);
      if (!state) {
        return res.status(400).send({ message: "State Not Exist" });
      }
      await state.remove();
      return res.status(200).send({ message: "Deleted Successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
stateRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const stateid = req.params.id;
    const reqstate = req.body.name;
    const lowerstate = reqstate.toLowerCase();
    const uperstate = lowerstate.charAt(0).toUpperCase() + lowerstate.slice(1);
    try {
      const state = await State.findById(stateid);
      const statename = await State.findOne({ name: uperstate });
      if (!state) {
        return res.status(404).send({ message: "State Not Exits" });
      }
      if (statename) {
        return res.status(404).send({ message: "State Already Exits" });
      }
      state.name = uperstate;
      state.save();
      return res.status(201).send({ message: "State updated Successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
export default stateRouter;
