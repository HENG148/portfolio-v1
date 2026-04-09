import mongoose, { Document, Schema } from "mongoose";

export interface IEducation extends Document {
  title: string;
  school: string;
  year: string;
}

const EducationSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    school: { type: String, required: true },
    year: { type: String, required: true },
  },
  { timestamps: true }
)

export default mongoose.models.Education || mongoose.model<IEducation>("Education", EducationSchema);