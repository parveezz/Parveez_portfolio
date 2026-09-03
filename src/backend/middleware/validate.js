/**
 * Validation middleware helper for contact submissions
 */
export function validateContactInput({ name, email, message }) {
  const errors = [];

  if (!name || typeof name !== "string" || !name.trim()) {
    errors.push("Name is required");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    errors.push("A valid email address is required");
  }

  if (!message || typeof message !== "string" || !message.trim()) {
    errors.push("Message is required");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
