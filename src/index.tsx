import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Route, Router, Routes } from "react-router";
import Home from "./Home";
import "./index.css";
import { createMemoryHistory } from "history";
import { store } from "./redux/store";

const container = document.getElementById("root")!;
const root = createRoot(container);
const history = createMemoryHistory();

root.render(
  <React.StrictMode>
    <Router location={""} navigator={history}>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Provider>
    </Router>
  </React.StrictMode>
);
