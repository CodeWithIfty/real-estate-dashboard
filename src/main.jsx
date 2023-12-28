import React from "react";
import ReactDOM from "react-dom/client";
import MyThemeProvider from "./utils/ThemeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./css/style.css";
import "./charts/ChartjsConfig";
import AdminLogIn from "./pages/AdminLogIn";
import AuthProvider from "./context/AuthProvider";
import Root from "./Root";
import PrivateRoutes from "./routes/PrivateRoutes";
import Slides from "./pages/Slides/Slides";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLogIn />,
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard />{" "}
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/slides",
        element: (
          <PrivateRoutes>
            <Slides />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </MyThemeProvider>
  </React.StrictMode>
);
