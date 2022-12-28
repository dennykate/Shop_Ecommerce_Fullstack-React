import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./Redux/Store/store";

import "./index.css";
import App from "./App";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Detail from "./routes/Detail";
import Cart from "./routes/Cart";
import Invoice from "./routes/Invoice";
import InvoiceDetail from "./routes/InvoiceDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/invoice",
    element: <Invoice />,
  },
  {
    path: "/invoice/:id",
    element: <InvoiceDetail />,
  },
]);

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
