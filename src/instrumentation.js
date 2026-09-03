export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const connectDB = (await import("@/backend/config/db")).default;
    await connectDB();
  }
}
