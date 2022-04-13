import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// Create a root.
ReactDOMClient.createRoot(document.getElementById('app') as Element | DocumentFragment).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);