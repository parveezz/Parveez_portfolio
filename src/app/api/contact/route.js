import { getContactStatus, sendContactMessage } from "@/backend/controllers/contactController";

export async function GET(request) {
  return await getContactStatus(request);
}

export async function POST(request) {
  return await sendContactMessage(request);
}
