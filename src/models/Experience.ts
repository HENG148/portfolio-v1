import mongoose, { Document, Schema } from "mongoose";

interface Bullet {
  text: string;
}

const BulletSchema = new Schema<Bullet>({
  text: {
    type: String, required: true
  },
})

export interface IExperience extends Document {
  title: string;
  company: string;
  period: string;
  bullets: Bullet[];
}

const ExperienceSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    period: { type: String, required: true},
    bullets: [BulletSchema],
  },
  { timestamps: true }
);

export default mongoose.models.Experience || mongoose.model<IExperience>("Experience", ExperienceSchema);