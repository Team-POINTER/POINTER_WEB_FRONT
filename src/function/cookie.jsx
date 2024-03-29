import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeTokenCookie = () => {
  cookies.remove(
    "refreshToken",
    {
      path: "/",
      domain: process.env.NODE_ENV === "production" ? ".@@@.com" : "localhost",
    },
    1000
  );
};

export const setTokenToCookie = (refresh) => {
  setCookie("refreshToken", refresh, {
    path: "/",
    maxAge: 14 * 24 * 60 * 60,
    domain: process.env.NODE_ENV === "production" ? ".@@@.com" : "localhost",
  });
};
