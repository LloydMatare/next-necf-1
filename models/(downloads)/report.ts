import mongoose, { Schema } from "mongoose";

const reportSchema = new Schema(
  {
    title: String,
    document: String,
    date: String,
  },
  {
    timestamps: true,
  }
);

const Report = mongoose.models.Report || mongoose.model("Report", reportSchema);

export default Report;

