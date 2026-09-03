import { getProjects, createProject } from "@/backend/controllers/projectController";

export async function GET(request) {
  const response = await getProjects(request);
  return response;
}

export async function POST(request) {
  const response = await createProject(request);
  return response;
}
