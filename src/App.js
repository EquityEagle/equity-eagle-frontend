import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, MobileNav, Navbar } from "./components";
import { GlobalStyles, LeftBlur, Stars } from "./styles/Global";
import { DashBoard, LandingPage, Login, SignUp } from "./pages";
import { MenuModal, MoreMenuModal } from "./modal";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <MenuModal />
      <MoreMenuModal />
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/auth/login" index element={<Login />} />
        <Route path="/auth/sign-up" index element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
      {/* <Footer /> */}
      <MobileNav />
    </div>
  );
}

export default App;
