import axios from "axios";
import { getCookie } from "../function/cookie";

// 질문 생성 여부 판단
export const whetherQuestion = ({ roomId }) => {
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/questions/check/${roomId}`, {
      headers: {
        Authorization: "Bearer " + getCookie("refreshToken"),
      },
    })
    .then((res) => res.data.result);
};

export const createQuestion = ({ roomId, content }) => {
  return axios
    .post(
      `${process.env.REACT_APP_BASE_URL}/questions`,
      {
        roomId,
        content,
      },
      {
        headers: {
          Authorization: "Bearer " + getCookie("refreshToken"),
        },
      }
    )
    .then((res) => res.data.result);
};

export const getQuestion = async ({ roomId }) => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/room/${roomId}`, {
    headers: {
      Authorization: `Bearer ${getCookie("refreshToken")}`,
    },
  });
};
