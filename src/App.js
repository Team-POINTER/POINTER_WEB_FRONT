import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";
import { Home } from "./pages/Home";
import { QuestionResult } from "./pages/QuestionResult";
import { UserPoint } from "./pages/UserPoint";
import { PointResult } from "./pages/PointResult";
import { NotFound } from "./pages/NotFound";
import { Login } from "./login/Login";
import { KakaoCallBack } from "./login/Kakao/KakaoCallBack";
import { SettingPage } from "./pages/SettingPage";
import { CreateQuestion } from "./pages/CreateQuestion";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Login />} />
            <Route path="/auth/kakao/callback" element={<KakaoCallBack />} />
          </Route>
          <Route path="home" element={<Home />} />
          <Route path="user-point" element={<UserPoint />} />
          <Route path="result" element={<QuestionResult />} />
          <Route path="question" element={<CreateQuestion />} />
          <Route path="point-result" element={<PointResult />} />
          <Route path="setting" element={<SettingPage />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
