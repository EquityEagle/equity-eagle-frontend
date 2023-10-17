import axios from "axios";
import { BASE_URL } from "./url";

export async function LikeSetup(setupId, userId) {
  const response = await axios.patch(
    `${BASE_URL}/setup/${setupId}/${userId}/like`
  );
  return response?.data;
}
