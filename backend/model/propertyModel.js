import mongoose from "mongoose";

const noofSchema = mongoose.Schema({
  bedroom: {
    type: Number,
  },
  kitchen: {
    type: Number,
  },
  bathroom: {
    type: Number,
  },
  hallroom: {
    type: Number,
  },
});
const featuresSchema = mongoose.Schema({
  name: {
    type: String,
  },
});
const gallerySchema = mongoose.Schema({
  img: {
    type: String,
  },
});
const geolocationSchema = mongoose.Schema({
  lat: {
    type: String,
  },
  lan: {
    type: String,
  },
});
const parkingSchema = mongoose.Schema({
  name: {
    type: String,
  },
  qty: {
    type: Number,
  },
});

const propertySchema = new mongoose.Schema(
  {
    titile: {
      type: String,
    },
    price: {
      type: Number,
    },
    property_type: { type: mongoose.Schema.Types.ObjectID, ref: "Type" },
    property_purpose: { type: mongoose.Schema.Types.ObjectID, ref: "Purpose" },
    property_tag: { type: mongoose.Schema.Types.ObjectID, ref: "Tag" },
    district: { type: mongoose.Schema.Types.ObjectId, ref: "City" },
    city: { type: mongoose.Schema.Types.ObjectId, ref: "SubCity" },
    no_of: [noofSchema],
    feature: [featuresSchema],
    gallery: [gallerySchema],
    geolocation: [geolocationSchema],
    parking: [parkingSchema],
    build_year: {
      type: String,
    },
    is_features: {
      type: Boolean,
    },
    is_active: {
      type: Boolean,
    },
    is_negotiable: {
      type: Boolean,
    },
    total_area: {
      type: String,
    },
    image: {
      type: String,
    },
    area: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Property = mongoose.model("Property", propertySchema);
export default Property;
