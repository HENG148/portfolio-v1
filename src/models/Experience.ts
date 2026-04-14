import mongoose, { Document, Schema } from "mongoose";
import { IExperienceInput } from "../db/schema/experience.schema";

interface Bullet {
  text: string;
}

const BulletSchema = new Schema<Bullet>({
  text: {
    type: String, required: true
  },
})

export interface IExperience extends IExperienceInput, Document {}

const ExperienceSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    period: { type: String, required: true},
    bullets: {type:[BulletSchema], default: []},
  },
  { timestamps: true }
);

export default mongoose.models.Experience || mongoose.model<IExperience>("Experience", ExperienceSchema);