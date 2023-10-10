import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Footer, MobileNav, Navbar } from "./components";
import { GlobalStyles, LeftBlur, Stars } from "./styles/Global";
import "react-toastify/dist/ReactToastify.css";
import {
  DashBoard,
  Explore,
  LandingPage,
  Login,
  Notification,
  Setups,
  SignUp,
} from "./pages";
import { CreateModal, MenuModal, MoreMenuModal, SetupModal } from "./modal";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Communities from "./pages/communities/Communities";

function App() {
  const user = useSelector((state) => state.AUTH);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.userLoaded) {
      navigate("/dashboard");
    } else {
      navigate("/auth/login");
    }
  }, [user]);
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <ToastContainer style={{ padding: "10px" }} draggable />
      <MenuModal />
      <MoreMenuModal />
      <CreateModal />
      <SetupModal />
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/auth/login" index element={<Login />} />
        <Route path="/auth/sign-up" index element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/setups" element={<Setups />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
      <Footer />
      <MobileNav />
    </div>
  );
}

export default App;
