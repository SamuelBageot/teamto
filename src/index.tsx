import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router
} from "react-router-dom";
import "./index.css";
import { createMemoryHistory } from "history";
import { store } from "./redux/store";
import App from "./components/App";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <ChakraProvider> */}
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    {/* </ChakraProvider> */}
  </React.StrictMode>
);
