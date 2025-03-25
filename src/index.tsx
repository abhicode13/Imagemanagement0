import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css"
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}> 
        <App />
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found.");
}
