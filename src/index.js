import "./global.css";
import { App } from "./App";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// pas besoin de mettre index.js parce qu'automatiquement quand tu vas chercher un dossier, il va chercher l'index
import { store } from "store"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={ store }>
    <StrictMode>
        <App />
    </StrictMode>
  </Provider>

);
