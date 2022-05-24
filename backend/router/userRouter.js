import express from "express";

import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";
import User from "../model/userModel.js";
import nodemailer from "nodemailer";
import axios from "axios";
import { encode, decode } from "../middleware/endcoder.js";
import OTP from "../model/otpModel.js";
import {
  messagePU,
  subject_mailPU,
} from "../templates/email/email_verification.js";

const userRouter = express.Router();

function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const requser = req.body.user;
    let user;
    let phoneuser;
    let check;
    console.log(user);
    if (ValidateEmail(requser)) {
      user = await User.findOne({ email: requser });
      check = requser;
    } else {
      phoneuser = await User.findOne({ phone: requser });
      check = requser;
    }
    console.log(user);
    console.log(phoneuser);

    const verification_key = req.body.verification;

    let decoded = await decode(verification_key);
    var obj = JSON.parse(decoded);
    const check_obj = obj.check;

    // Check if the OTP was meant for the same email or phone number for which it is being verified
    if (check_obj != check) {
      const response = {
        Status: "Failure",
        message: "OTP was not sent to this particular email or phone number",
      };
      return res.status(400).send(response);
    }

    const otp_schema = await OTP.findOne({ _id: obj.otp_id });
    if (otp_schema.verification != true) {
      const response = { Status: "Failure", message: "OTP NOT Verified" };
      return res.status(400).send(response);
    }

    if (!user) {
      const bcryptpassword = bcrypt.hashSync(req.body.password, 8);
      const user = new User({
        fullname: req.body.fullname,
        email: requser,
        password: bcryptpassword,
      });

      const adduser = await user.save();
      console.log("called 1");
      if (adduser) {
        const output = `
                      <p>Your Details</p>
                      <h3>Your Details </h3>
                      <ul>  
                      <li>First Name: ${adduser.fullname}</li>
                      
                      <li>Email: ${adduser.email}</li>
                      <li>Phone: ${"bibash"}</li>
                      </ul>
                      
                  `;
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: "pdlbibash77@gmail.com ", // generated ethereal user
            pass: "Bibash7$$&&@@", // generated ethereal password
          },
          tls: {
            rejectUnauthorized: false,
          },
        });

        // setup email data with unicode symbols
        let mailOptions = {
          from: '"TechFortress" <contact@techfortress.com>', // sender address
          to: adduser.email, // list of receivers
          subject: "Welcome Message", // Subject line
          text:
            "Dear " +
            adduser.fullname +
            ", \n \n Thank You for Registration. \n Successfully Register", // plain text body
          html: output,
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
          }

          res.render("contact", { msg: "Email has been sent" });
        });
        return res.status(201).send({
          _id: adduser._id,
          fullname: adduser.fullname,
          email: adduser.email,

          token: generateToken(adduser),
        });
      } else {
        return res.status(500).send({ message: error });
      }
      //   } else {
      //     return res
      //       .status(400)
      //       .send({ message: "user already exist with this phone number" });
      //   }
    } else {
      return res
        .status(400)
        .send({ message: "user already exist with this email" });
    }
  })
);

//signin function
userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const requser = req.body.user;
    let user;
    let phoneuser;
    let check;
    console.log(requser);
    if (ValidateEmail(requser)) {
      user = await User.findOne({ email: requser });
      check = user;
    } else {
      phoneuser = await User.findOne({ phone: requser });
      check = phoneuser;
    }
    console.log(check);
    if (check) {
      if (bcrypt.compareSync(req.body.password, check.password)) {
        res.send({
          _id: check._id,
          fullname: check.fullname,
          email: check.email,
          phone: check.phone,
          token: generateToken(check),
        });
        return;
      } else {
        res.status(401).send({ message: "Invalid password" });
      }
    } else {
      return res.status(400).send({ message: "Invalid Email or Phone" });
    }
  })
);
userRouter.put(
  "/changepassword",
  expressAsyncHandler(async (req, res) => {
    const requser = req.body.user;
    let user;
    let phoneuser;
    let check;
    console.log(user);
    if (ValidateEmail(requser)) {
      user = await User.findOne({ email: requser });
      check = requser;
    } else {
      phoneuser = await User.findOne({ phone: requser });
      check = requser;
    }
    const verification_key = req.body.verification;
    const password = req.body.password;
    // let email_subject, email_message;
    try {
      let decoded = await decode(verification_key);

      var obj = JSON.parse(decoded);
      const check_obj = obj.check;

      // Check if the OTP was meant for the same email or phone number for which it is being verified
      if (check_obj != check) {
        const response = {
          Status: "Failure",
          Details: "OTP was not sent to this particular email or phone number",
        };
        return res.status(400).send(response);
      }

      const otp_schema = await OTP.findOne({ _id: obj.otp_id });
      if (otp_schema.verification != true) {
        const response = { Status: "Failure", Details: "OTP NOT Verified" };
        return res.status(400).send(response);
      }
      if (user || phoneuser) {
        const bcryptpassword = bcrypt.hashSync(password, 8);
        user.password = bcryptpassword;
        user.save();

        const fullname = user.fullname;
        const email_message = messagePU(fullname);
        const email_subject = subject_mailPU;

        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: "pdlbibash77@gmail.com ", // generated ethereal user
            pass: "Bibash7$$&&@@", // generated ethereal password
          },
          tls: {
            rejectUnauthorized: false,
          },
        });

        const mailOptions = {
          from: `"Techfortress"<pdlbibash77@gmail.com>`,
          to: `${check}`,
          subject: email_subject,
          text: email_message,
        };

        await transporter.verify();

        //Send Email
        await transporter.sendMail(mailOptions, (error, response) => {
          if (error) {
            return res
              .status(400)
              .send({ Status: "messege send Fail", message: error });
          }
        });

        return res
          .status(201)
          .send({ message: "Password updated successfully" });
      } else {
        const response = { Status: "failure", message: "Email not exits" };
        return res.status(400).send(response);
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  })
);

export default userRouter;
