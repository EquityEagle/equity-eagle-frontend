import axios from "axios";

// export const BASE_URL = "http://localhost:5000";
export const BASE_URL = "https://equityeagle-api.onrender.com";

export async function LoginWithMail(email) {
  const response = await axios.post(`${BASE_URL}/auth/mail-login`, {
    email: email,
  });
}
