import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Login } from "./login/Login";
import { Home } from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import App from "./App";
import { UserPoint } from "./pages/UserPoint";
import { QuestionResult } from "./pages/QuestionResult";
import { CreateQuestion } from "./components/RoomList/detail/CreateQuestion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Login />, errorElement: <NotFound /> },
      {
        path: "/home",
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "/result",
        element: <QuestionResult />,
        errorElement: <NotFound />,
      },
      {
        path: "/question",
        element: <CreateQuestion />,
        errorElement: <NotFound />,
      },
      {
        path: "/home/user-point",
        element: <UserPoint />,
        errorElement: <NotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
