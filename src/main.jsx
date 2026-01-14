import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App";

// redux

import { Provider } from "react-redux";
import { store } from "./store";
import { LoadingProvider } from "./hooks/useContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </Provider>
  </StrictMode>
);
