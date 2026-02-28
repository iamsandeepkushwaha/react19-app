// UserForm.jsx
async function saveUser(prevState, formData) {
  const name = formData.get("name");

  if (!name) {
    return { error: "Name is required" };
  }

  // simulate API call
  await new Promise((r) => setTimeout(r, 1000));

  return { success: true, name };
}