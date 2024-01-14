import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/layout/App";
import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from "react-router-dom";
<link rel="icon" href="https://media.licdn.com/dms/image/D4D03AQF-2nrIr4xJFQ/profile-displayphoto-shrink_800_800/0/1695508935822?e=1710979200&v=beta&t=qkkXJD13LNYRXkF1mtNF_3-f1SR2Ym4dHuTxtHAuz00" />

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
