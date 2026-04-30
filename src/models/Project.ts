import mongoose, { Schema, Document, Model } from "mongoose";
import { Project } from "../db/schema/project.schema";

export interface IProject extends Omit<Project, "_id">, Document {}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    category: { type: String },
    description: { type: String, required: true },
    imageUrl: { type: String },
    tags: { type: [String], required: true },
    githubUrl: { type: String },
    liveUrl: { type: String },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const ProjectModel: Model<IProject> =
  mongoose.models.Project ||
  mongoose.model<IProject>("Project", ProjectSchema);

export default ProjectModel;