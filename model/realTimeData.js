const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema(
  {
    farmid: {
      type: String,
      required: ["true", "Farmid missing!"],
    },
    temperature: {
      type: String,
      default: "",
    },
    humidity: {
      type: String,
      default: "",
    },
    pH: {
      type: String,
      default: "",
    },
    soilMoisture: {
      type: String,
      default: "",
    },
    waterValveOn: {
      type: Boolean,
      default: "",
    },
  },
  { timestamps: true }
);

const DataRT = mongoose.model("farmdata", dataSchema);
module.exports = DataRT;
