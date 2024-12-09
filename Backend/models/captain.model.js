const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "Firstname must be at least 3 characters long."],
      maxlength: [40, "Firstname must be at most 30 characters long."],
    },
    lastname: {
      type: String,
      minlength: [3, "Lastname must be at least 3 characters long."],
    },
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email address."],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "Color must be at least 3 characters long."],
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, "Plate no. at least 3 characters long."],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be at least 1 passenger."],
    },
    vehicleType: {
      type: String,
      enum: ["car", "auto", "motorcycle"],
      required: true,
    },
  },
  location: {
    lattitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    }
  }
});

captainSchema.method.generateAuthToken = function () {
  const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
  return token;
}

captainSchema.method.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}

captainSchema.method.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;