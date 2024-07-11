//users are admin and customer
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["admin", "regular"],
    default: "regular",
  },
  is_active: {
    type: Boolean,
    default: false,
  },
  myBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }]
});

module.exports = mongoose.model("User", UserSchema);
