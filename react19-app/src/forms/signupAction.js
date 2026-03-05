export async function signupAction(prevState, formData) {

  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  // Validation
  if (!name || !email || !password) {
    return { error: "All fields are required" };
  }

  if (password.length < 6) {
    return { error: "Password must be at least 6 characters" };
  }

  // Fake success
  return { success: "Signup successful 🎉" };
}