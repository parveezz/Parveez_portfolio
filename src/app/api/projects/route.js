import { getProjects, createProject } from "@/backend/controllers/projectController";

export async function GET(request) {
  return await getProjects(request);
}

export async function POST(request) {
  return await createProject(request);
}
