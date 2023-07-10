import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";
import { Home } from "./pages/Home";
import { QuestionResult } from "./pages/QuestionResult";
import { CreateQuestion } from "./components/RoomList/detail/CreateQuestion";
import { UserPoint } from "./pages/UserPoint";
import { PointResult } from "./pages/PointResult";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="home/user-point" element={<UserPoint />} />
        <Route path="result" element={<QuestionResult />} />
        <Route path="question" element={<CreateQuestion />} />
        <Route path="point-result" element={<PointResult />} />
        <Route path="*" element={<div>없는 페이지입니다.</div>}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
