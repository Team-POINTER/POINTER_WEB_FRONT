import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";
import { Home } from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<div>없는 페이지입니다.</div>}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
