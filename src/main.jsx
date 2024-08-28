import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TentangKami from "./layout/TentangKami.jsx";
import Donasi from "./pages/Donation.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*<App />*/}
    {/*<TentangKami />*/}
    <Donasi />
  </StrictMode>,
);
