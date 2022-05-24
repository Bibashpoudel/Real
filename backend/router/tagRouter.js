import express from "express";
import expressAsyncHandler from "express-async-handler";
import Tag from "../model/tagModel.js";

const tagRouter = express.Router();

tagRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    try {
      const tag = await Tag.find({});
      return res.status(200).send(tag);
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);

tagRouter.post(
  "/add",
  expressAsyncHandler(async (req, res) => {
    const reqtag = req.body.name;
    const lowertag = reqtag.toLowerCase();
    const upertag = lowertag.charAt(0).toUpperCase() + lowertag.slice(1);
    try {
      const tag = await Tag.findOne({ name: upertag });
      if (tag) {
        return res.status(400).send({ message: "Tag already exits" });
      }
      const newtag = new Tag({
        name: upertag,
      });
      await newtag.save();
      return res.status(201).send({ message: "Tag added successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
tagRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const tagid = req.params.id;
    const reqtag = req.body.name;
    const lowertag = reqtag.toLowerCase();
    const upertag = lowertag.charAt(0).toUpperCase() + lowertag.slice(1);
    try {
      const tag = await Tag.findById(tagid);
      const tagname = await Tag.findOne({ name: upertag });
      if (!tag) {
        return res.status(404).send({ message: "No Tag Found" });
      }
      if (tagname) {
        return res.status(400).send({ message: "Tag already exits" });
      }
      tag.name = upertag;
      await tag.save();
      return res.status(200).send({ message: "Tag updated Successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
tagRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const tagid = res.params.id;
    try {
      const tag = await Tag.findById(tagid);
      if (!tag) {
        return res.status(404).send({ message: "No Tag Found" });
      }
      await tag.remove();
      return res.status(200).send({ message: "Tag deleted successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);

export default tagRouter;
