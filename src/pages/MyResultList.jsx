import React, { Fragment, useEffect } from "react";
import { Header } from "../components/Header/Header";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../function/cookie";
import { myResultList } from "../api/room";

const MyResultList = (props) => {
  const { state } = useLocation();
  const { roomData } = state;
  useEffect(() => {
    const fetch = async () => {
      const response = await myResultList(roomData.roomId);
      console.log(1);
      console.log(response);
      
    }
    fetch();
  });

  return (
    <Fragment>
      <Header />
    </Fragment>
  );
};

export default MyResultList;
