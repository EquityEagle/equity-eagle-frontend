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
  Connect,
  Current,
  DashBoard,
  LandingPage,
  Login,
  Metric,
  NewCommunity,
  Notification,
  Settings,
  SetupId,
  Setups,
  SignUp,
} from "./pages";
import {
  CommunitySearch,
  CreateModal,
  MenuModal,
  MobileModal,
  MoreMenuModal,
  SetupModal,
  TrackModal,
  TradeModal,
  UserSearchModal,
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
      {/* Modals */}
      <MenuModal />
      <MoreMenuModal />
      <CreateModal />
      <SetupModal />
      <TrackModal />
      <MobileModal />
      <CommunitySearch />
      <UserSearchModal />
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/auth/login" index element={<Login />} />
        <Route path="/auth/sign-up" index element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/ideas" element={<Setups />} />
        <Route path="/account/:username" element={<Account />} />
        <Route path="/ideas/statusId/:setupId" element={<SetupId />} />
        <Route path="/account/settings" element={<Settings />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/new-community" element={<NewCommunity />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/new-community" element={<NewCommunity />} />
        <Route path="/communities/:communityslug" element={<Current />} />
        <Route path="/dashboard/metrix/:metrixId" element={<Metric />} />
      </Routes>
      {path.pathname.includes("auth") ? "" : <Footer />}
      {path.pathname.includes("communities") ? "" : <MobileNav />}
    </div>
  );
}

export default App;
