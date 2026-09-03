import { GET as handleGet, POST as handlePost } from "@/backend/routes/contactRoutes";

export async function GET(request) {
  return await handleGet(request);
}

export async function POST(request) {
  return await handlePost(request);
}
