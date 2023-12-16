import axios from "axios";
import { BASE_URL } from "./url";

export async function deleteMetrix(accounthash) {
  const response = await axios.delete(
    `${BASE_URL}/metrix/delete/${accounthash}`
  );
  return response?.data;
}
