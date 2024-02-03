import axios from "axios";
import { BASE_URL } from "./url";

export async function getUserById(userId) {
  const response = await axios.get(`${BASE_URL}/user/one/id/${userId}`);
  return response?.data;
}

export async function getSetupActions(setupId) {
  const response = await axios.get(`${BASE_URL}/setup/like/comment/${setupId}`);
  return response?.data;
}

export async function getViewdSetup(setupId, userId) {
  const response = await axios.get(
    `${BASE_URL}/setup/${setupId}/${userId}/one`
  );
  return response?.data;
}

export async function getSetupComments(setupId) {
  const response = await axios.get(`${BASE_URL}/setup/${setupId}/comment/all`);
  return response?.data;
}

export async function getSetupCommentLikes(commentId) {
  const response = await axios.get(
    `${BASE_URL}/setup/${commentId}/comment/likes`
  );
  return response?.data;
}

export async function getAccounts(trackId) {
  const response = await axios.get(`${BASE_URL}/metrix/find/${trackId}/one`);
  return response?.data;
}

export async function getAccountTrades(metrixId) {
  const response = await axios.get(
    `${BASE_URL}/metrix/find/${metrixId}/one/trades/`
  );
  return response?.data;
}

export async function getAccountsProfitData(metrixId) {
  const response = await axios.get(
    `${BASE_URL}/metrix/find/${metrixId}/one/p/data`
  );
  return response?.data;
}

export async function getNotifications(userId) {
  const response = await axios.get(`${BASE_URL}/notification/${userId}`);
  return response?.data;
}

export async function getUnreadNotifications(userId) {
  const response = await axios.get(`${BASE_URL}/notification/unread/${userId}`);
  return response?.data;
}

export async function getMessages(chatId) {
  const response = await axios.get(`${BASE_URL}/message/all/${chatId}`);
  return response?.data;
}

export async function getUnreadMessage(chatId) {
  const response = await axios.get(`${BASE_URL}/message/msg/unread/${chatId}`);
  return response?.data;
}
