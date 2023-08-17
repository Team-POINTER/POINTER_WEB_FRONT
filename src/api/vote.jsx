import axios from "axios";
import { getCookie } from "../function/cookie";

export const voting = ({ questionId, userId, votedUserIds, hint }) => {
  return axios.post(
    `${process.env.REACT_APP_BASE_URL}/votes`,
    {
      questionId: questionId,
      userId: userId,
      votedUserIds: votedUserIds,
      hint: hint,
    },
    {
      headers: {
        Authorization: "Bearer " + getCookie("refreshToken"),
      },
    }
  );
};

export const voteOrNot = async (questionId) => {
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/votes/check/${questionId}`,{
      headers: {
        Authorization: "Bearer " + getCookie("refreshToken"),
      },
    })
    .then(res => res.data.result);
};

