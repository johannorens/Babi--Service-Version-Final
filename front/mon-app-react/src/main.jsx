import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/react";
import "./index.css";
import App from "./App.jsx";

Sentry.init({
  dsn: "https://f7e060446321df0c60db80ea47348a65@o4511732649230336.ingest.de.sentry.io/4511786183491664",
  integrations: [Sentry.browserTracingIntegration()],
  tracesSampleRate: 1.0,
  environment: "local",
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
