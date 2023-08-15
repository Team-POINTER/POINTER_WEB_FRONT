import axios from "axios";
import { getCookie } from "../function/cookie";

export const LinkInvite = (invitationCode) => {
  return axios
    .get(
      `${process.env.REACT_APP_BASE_URL}/room/invitation/${invitationCode}`,
      {
        headers: {
          Authorization: "Bearer " + getCookie("refreshToken"),
        },
      }
    ).then(res => res.data);
};
