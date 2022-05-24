import express from "express";
import expressAsyncHandler from "express-async-handler";
import Types from "../model/typesModel.js";

const typesRouter = express.Router();

typesRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    try {
      const types = await Types.find({});
      if (types.lenth !== 0) {
        return res.status(200).send(types);
      }
      return res.status(404).send({ message: "No types Found" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
typesRouter.post(
  "/add",
  expressAsyncHandler(async (req, res) => {
    const reqtype = req.body.name;
    let lowertype = reqtype.toLowerCase();
    const upercasetype = lowertype.charAt(0).toUpperCase() + lowertype.slice(1);

    try {
      const types = await Types.findOne({ name: upercasetype });

      if (types) {
        return res
          .status(400)
          .send({ message: "types with this name already exits" });
      }
      const newtypes = Types({
        name: upercasetype,
      });
      await newtypes.save();
      return res.status(201).send({ message: "New types added successfully" });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Internal Server Error", error: error });
    }
  })
);
typesRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    try {
      const typesid = req.params.id;
      const types = await Types.findById(typesid);
      if (types) {
        await types.remove();
        return res.status(200).send({ message: "Type deleted successfully" });
      }
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);
typesRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const reqtype = req.body.name;
    let lowertype = reqtype.toLowerCase();
    const upercasetype = lowertype.charAt(0).toUpperCase() + lowertype.slice(1);
    try {
      const types = await Types.findById(req.params.id);
      const typesname = await Types.findOne({ name: upercasetype });
      if (!types) {
        return res.status(404).send({ message: "Type Not Found" });
      }
      if (typesname) {
        return res.status(400).send({ message: "Type already exits" });
      }
      types.name = upercasetype;
      types.save();
      return res.status(201).send({ message: "Updated Successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Internal Server Error" });
    }
  })
);

export default typesRouter;
