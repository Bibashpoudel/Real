import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      fullname: user.fullname,
      phone: user.phone,
      email: user.email,
    },
    process.env.JWT_SECRET || "keepsecretbibash",
    {
      expiresIn: "30d",
    }
  );
};

const RestApiKey = () => {
  return jwt.sign({}, process.env.JWT_SECRET || "keepsecretbibash");
};

const Tokenvalid = (req, res, next) => {
  const wed_rest_api = req.headers.Api_Key;
  if (authorization) {
    const token = wed_rest_api.slice(7, wed_rest_api.length); // Bearer XXXXXX
    jwt.verify(
      token,
      process.env.JWT_SECRET || "keepsecretbibash",
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: "Invalid Token" });
        } else {
          next();
        }
      }
    );
  } else {
    res.status(401).send({ message: "No Token" });
  }
};

const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  console.log("token", authorization);
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    jwt.verify(
      token,
      process.env.JWT_SECRET || "keepsecretbibash",
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: "Invalid Token" });
        } else {
          req.user = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send({ message: "No Token" });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  } else {
    res.status(401).send({ message: "is not admin" });
  }
};
const isVendor = (req, res, next) => {
  if (req.user && req.user.isVendor) {
    return next();
  } else {
    res.status(401).send({ message: "is not Vendor" });
  }
};
const isVendorOrAdmin = (req, res, next) => {
  if (req.user && (req.user.isVendor || req.user.isAdmin)) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Admin/Seller Token" });
  }
};

export {
  generateToken,
  isAdmin,
  isAuth,
  isVendor,
  Tokenvalid,
  isVendorOrAdmin,
};
