import axios from "axios";
import { BASE_URL } from "./url";

export async function LikeSetup(setupId, userId) {
  const response = await axios.patch(
    `${BASE_URL}/setup/${setupId}/${userId}/like`
  );
  return response?.data;
}

export async function StarSetup(setupId, userId) {
  const response = await axios.patch(
    `${BASE_URL}/setup/${setupId}/${userId}/star`
  );
  return response?.data;
}

export async function BagSetup(setupId, userId) {
  const response = await axios.patch(
    `${BASE_URL}/setup/${setupId}/${userId}/bag`
  );
  return response?.data;
}

export async function LikeSetupcomments(commentId, userId) {
  const response = await axios.patch(
    `${BASE_URL}/setup/${commentId}/like/${userId}`
  );
  return response?.data;
}

export async function ProfileUpdate(userId, photo) {
  const response = await axios.patch(
    `${BASE_URL}/user/edit/profile/${userId}`,
    { profile: photo }
  );
  return response?.data;
}

export async function ReadNotification(userId, noteId) {
  const response = await axios.patch(
    `${BASE_URL}/notification/mark/${userId}/${noteId}`
  );
  return response?.data;
}

export async function ConnectUser(userId, connectorsId) {
  const response = await axios.patch(
    `${BASE_URL}/user/connect/${userId}/${connectorsId}`
  );
  return response?.data;
}

export async function journal(data, accounthash) {
  const response = await axios.post(`${BASE_URL}/trade/new/${accounthash}/`, {
    // accounthash: data.trackId,
    symbol: data.symbol,
    type: data.type,
    lotSize: data.lotSize,
    why: data.why,
    profit: data.profit,
    loss: data.loss,
  });
  return response?.data;
}

export async function editTrade(tradeId, data) {
  const response = await axios.patch(`${BASE_URL}/trade/edit/${tradeId}`, {
    setupImg: data.setupImg,
    entrysty: data.entrySty,
    exitsty: data.exitSty,
    comments: data.comments,
  });

  return response?.data;
}
