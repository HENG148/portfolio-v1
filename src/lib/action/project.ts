import connectDB from "@/src/db/mongoose";
import ProjectModel from "@/src/models/Project";

export async function getFeaturedProjects() {
  await connectDB();

  const projects = await ProjectModel.find({ featured: true }).lean();

  return projects.map((p) => ({
    ...p,
    _id: p._id.toString(),
  }));
}