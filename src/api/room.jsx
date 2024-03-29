import axios from "axios";
import { getCookie } from "../function/cookie";
import { getAccessToken } from "./auth";

export const getRoomList = (keyword) => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/room?kwd=` + keyword, {
    headers: {
      Authorization: "Bearer " + getCookie("refreshToken"),
    },
  });
};

export const updateRoomName = (dto) => {
  return axios.patch(
    `${process.env.REACT_APP_BASE_URL}/room/verify/room-name`,
    dto,
    {
      headers: {
        Authorization: "Bearer " + getCookie("refreshToken"),
      },
    }
  );
};

export const createRoom = (roomNm) => {
  return axios
    .post(
      `${process.env.REACT_APP_BASE_URL}/room/create`,
      {
        roomNm: roomNm,
      },
      {
        headers: {
          Authorization: "Bearer " + getCookie("refreshToken"),
        },
      }
    )
    .then((res) => {
      window.location.replace("/home");
    })
    .catch((e) => console.log(e));
};

export const leaveRoom = (roomId) => {
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/room/${roomId}/exit`, {
      headers: {
        Authorization: "Bearer " + getCookie("refreshToken"),
      },
    })
    .then((res) => {
      window.location.replace("/home");
    });
};

export const roomLink = (roomId) => {
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/room/${roomId}/invitation`, {
      headers: {
        Authorization: "Bearer " + getCookie("refreshToken"),
      },
    })
    .then((res) => res.data.data);
};

export const myResultList = async (roomId) => {
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/questions/${roomId}`, {
      headers: {
        Authorization: "Bearer " + getCookie("refreshToken"),
      },
    })
    .then(res => res.data.result);
};
