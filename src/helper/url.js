export const BASE_URL = "http://localhost:5000";
import axios from "axios";

export async function LoginWithMail(email) {
  const response = await axios.post(`${BASE_URL}/auth/mail-login`, {
    email: email,
  });
}
