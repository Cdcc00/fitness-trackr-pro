import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { AuthProvider } from "./auth/AuthContext";
import { RoutinesProvider } from "./api/RoutinesContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <RoutinesProvider>
        <App />
      </RoutinesProvider>
    </AuthProvider>
  </BrowserRouter>,
);
