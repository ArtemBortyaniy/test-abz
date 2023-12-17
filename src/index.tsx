import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { store } from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
