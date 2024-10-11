import * as React from "react";
import App from "./App.jsx";
import Error from "./compoments/error.jsx";
import Bookstore from "./compoments/bokstore.jsx"
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error />,
  },
  {
    path: "/bookstore",
    element: <Bookstore/>
  }
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
