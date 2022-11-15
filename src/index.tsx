import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, RouteComponentProps, Switch } from 'react-router-dom'
import Home from "./pages/Home";
import "./index.css";
import { createMemoryHistory } from "history";
import { store } from "./redux/store";
import { ChakraProvider } from '@chakra-ui/react'
import CharacterPage from "./pages/Character";
import Layout from "./components/Layout";

const container = document.getElementById("root")!;
const root = createRoot(container);
const history = createMemoryHistory();

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Provider store={store}>
          <Switch>
            <Layout>
              <Route path="/" component={Home } exact />
              <Route path="/:id" component={CharacterPage} />
            </Layout>
          </Switch>
        </Provider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
