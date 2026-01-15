import MentorSection from "../features/public-site/components/mentor/MentorSection";
import HeroSection from "@/features/public-site/components/HeroSection";
import "./App.css";
import PublicHomePage from "@/features/public-site/pages/PublicHomePage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { LoginPage } from "@/features/auth/pages/LoginPage";
import { AppRoutes } from "./routers/routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      {/* <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/" index={true} element={<PublicHomePage />}></Route>
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
