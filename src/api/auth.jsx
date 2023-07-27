import axios from "axios";
import { getCookie, setTokenToCookie } from "../function/cookie";

export const getUserInfo = () => {
  return axios
    .post(`${process.env.REACT_APP_BASE_URL}/user/reissue`, 
      {},
      {
        headers: {
          Authorization: "Bearer " + getCookie("refreshToken"),
        },
      }
    )
    .then(res => {
      console.log(res.data);
      setTokenToCookie(res.data.tokenDto.refreshToken);
      return res.data.tokenDto;
    })
    .catch(e => {
      console.log('err: ' + e);
    });
};
