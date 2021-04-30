// Create a unqiue identifier for a new user using
// the user email and provider.
const generateUsername = (email) => {
  const parts = email.split("@");
  let id = "";
  for (const char of parts[1].replace(".", "")) {
    id += char.charCodeAt(0) - 97;
  }

  id = parseInt(id).toString(16);
  return parts[0] + id;
};

export default generateUsername;
