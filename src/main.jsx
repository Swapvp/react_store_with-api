import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Details from "./components/Details.jsx";
import Context from "./utils/Context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    ErrorBoundary: "404 Error",
  },
  {
    path: "/details/:id",
    element: <Details />,
    ErrorBoundary: "404 Error",
  },
]);

createRoot(document.getElementById("root")).render(
  <Context>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Context>
);
