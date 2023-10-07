import axios from "axios";
import { BASE_URL } from "./url";

export async function getUserById(userId) {
  const response = await axios.get(`${BASE_URL}/user/one/id/${userId}`);
  return response?.data;
}
