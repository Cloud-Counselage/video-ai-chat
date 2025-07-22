import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/coi-serviceworker.js");
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
