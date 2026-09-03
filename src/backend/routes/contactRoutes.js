import { getContactStatus, sendContactMessage } from "@/backend/controllers/contactController";

export async function GET(request) {
  const response = await getContactStatus(request);
  return response;
}

export async function POST(request) {
  const response = await sendContactMessage(request);
  return response;
}
