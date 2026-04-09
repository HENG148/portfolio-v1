import mongoose, { Document, Schema } from "mongoose";
import { IEducationInput } from "../db/schema/education.schema";

export interface IEducation extends Document, IEducationInput {}

const EducationSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    school: { type: String, required: true },
    year: { type: String, required: true },
  },
  { timestamps: true }
)

export default mongoose.models.Education || mongoose.model<IEducation>("Education", EducationSchema);