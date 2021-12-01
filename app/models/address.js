const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    address: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const address = mongoose.model("address", addressSchema);

class addressModel {}

module.exports = new addressModel();
