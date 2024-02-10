import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { Footer, MobileNav, Navbar } from "./components";
import { GlobalStyles } from "./styles/Global";
import "react-toastify/dist/ReactToastify.css";
import {
  Account,
  Connect,
  Current,
  DashBoard,
  LandingPage,
  Login,
  Messages,
  Metric,
  NewCommunity,
  Notification,
  Settings,
  SetupId,
  Setups,
  SignUp,
} from "./pages";
import {
  AccountSwitchModal,
  AddAccountModal,
  CommunitySearch,
  CreateModal,
  MenuModal,
  MobileModal,
  MoreMenuModal,
  SetupModal,
  TrackModal,
  UserSearchModal,
} from "./modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Communities from "./pages/communities/Communities";
import { checkUser } from "./redux/auth";

function App() {
  const user = useSelector((state) => state.AUTH);
  const navigate = useNavigate();
  const path = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.userLoaded) {
      navigate("/dashboard");
    } else {
      navigate("/auth/login");
    }
  }, [user]);

  useEffect(() => {
    if (user.id) {
      const processedUser = {
        token: user.token,
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        profile: user.profile,
        userLoaded: user.userLoaded,
      };

      dispatch(checkUser(processedUser));
    }
  }, [user, dispatch]);
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <ToastContainer draggable bodyClassName="toast__alert" />
      {/* Modals */}
      <AddAccountModal />
      <MenuModal />
      <MoreMenuModal />
      <CreateModal />
      <SetupModal />
      <TrackModal />
      <MobileModal />
      <CommunitySearch />
      <UserSearchModal />
      <AccountSwitchModal />
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/auth/login" index element={<Login />} />
        <Route path="/auth/sign-up" index element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/ideas" element={<Setups />} />
        <Route path="/messages" element={<Messages />} />
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
      {path.pathname.includes("communities") ||
      path.pathname === "/messages" ? (
        ""
      ) : (
        <MobileNav />
      )}
    </div>
  );
}

export default App;
