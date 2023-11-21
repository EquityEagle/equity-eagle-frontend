import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./App.css";
import { Footer, MobileNav, Navbar } from "./components";
import { GlobalStyles, LeftBlur, Stars } from "./styles/Global";
import "react-toastify/dist/ReactToastify.css";
import {
  Account,
  Current,
  DashBoard,
  Explore,
  LandingPage,
  Login,
  Metric,
  Notification,
  SetupId,
  Setups,
  SignUp,
} from "./pages";
import {
  CreateModal,
  MenuModal,
  MobileModal,
  MoreMenuModal,
  SetupModal,
  TrackModal,
  TradeModal,
} from "./modal";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Communities from "./pages/communities/Communities";

function App() {
  const user = useSelector((state) => state.AUTH);
  const navigate = useNavigate();
  const path = useLocation();
  const { communityslug } = useParams();

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
      <ToastContainer draggable bodyClassName="toast__alert" />
      <MenuModal />
      <MoreMenuModal />
      <CreateModal />
      <SetupModal />
      <TrackModal />
      <MobileModal />
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/auth/login" index element={<Login />} />
        <Route path="/auth/sign-up" index element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/ideas" element={<Setups />} />
        <Route path="/account" element={<Account />} />
        <Route path="/ideas/statusId/:setupId" element={<SetupId />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/communities/:communityslug" element={<Current />} />
        <Route path="/dashboard/metrix/:metrixId" element={<Metric />} />
      </Routes>
      {path.pathname.includes("auth") ? "" : <Footer />}
      {path.pathname.includes("ommunities") ? "" : <MobileNav />}
    </div>
  );
}

export default App;
