import axios from "axios";
import { getCookie } from "../function/cookie";

export const voting = ({ questionId, userId, votedUserIds, hint }) => {
  return axios
    .post(
      `${process.env.REACT_APP_BASE_URL}/votes`,
      {
        questionId: questionId,
        userId: userId,
        voteUserIds: votedUserIds,
        hint: hint,
      },
      {
        headers: {
          Authorization: "Bearer " + getCookie("refreshToken"),
        },
      }
    )
};
