import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { Footer, MobileNav, Navbar } from "./components";
import { GlobalStyles } from "./styles/Global";
import "react-toastify/dist/ReactToastify.css";
import {
  Account,
  ComingSoon,
  Connect,
  Current,
  DashBoard,
  LandingPage,
  Login,
  Messages,
  Metric,
  NewCommunity,
  Notification,
  Saved,
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
  LockAccount,
  ManageAccount,
  MenuModal,
  MobileModal,
  MoreMenuModal,
  PairFilter,
  PassCodeCheck,
  SettingsModal,
  SetupModal,
  TrackModal,
  UserSearchModal,
  ViewStory,
} from "./modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Communities from "./pages/communities/Communities";
import { checkUser, updatedAccounts } from "./redux/auth";
import { ThemeProvider } from "styled-components";
import { findAllAccount } from "./redux/accountmetrix";
import { getSwitchUser, getUnreadNotifications } from "./helper/fetch";
import { setNotification } from "./redux/system";
import { fetchNotifications, updatedNotify } from "./redux/notification";

function App() {
  const user = useSelector((state) => state.AUTH);
  const navigate = useNavigate();
  const path = useLocation();
  const dispatch = useDispatch();
  const systemConfig = useSelector((state) => state.SYSTEM);
  const bg = systemConfig.backgroudColor;
  const userId = user.id;
  const [notifications, setNotifications] = useState([]);
  const [User, setUser] = useState([]);

  useEffect(() => {
    dispatch(fetchNotifications(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    const getuser = async () => {
      const data = await getSwitchUser(userId);
      setUser(data);
    };
    getuser();
    // console.log("user:", User);
  }, [userId]);

  useEffect(() => {
    dispatch(updatedAccounts(User));
  }, [User]);

  useEffect(() => {
    const getNotes = async () => {
      const data = await getUnreadNotifications(userId);
      setNotifications(data);
    };
    getNotes();
  }, [notifications, userId]);

  useEffect(() => {
    dispatch(setNotification(notifications));
  }, [notifications]);

  useEffect(() => {
    dispatch(updatedNotify(notifications));
  }, []);

  useEffect(() => {
    dispatch(findAllAccount(userId));
  }, [dispatch, userId]);

  const [color, setColor] = useState("");

  useEffect(() => {
    setColor(bg);
  }, [bg]);

  useEffect(() => {
    if (user.userLoaded) {
      navigate("/dashboard");
    } else {
      navigate("/auth/login");
    }
  }, [user]);

  useEffect(() => {
    const accState = user.Accounts;
    const u = accState.find((ur) => ur.id === user.id);
    if (user.id) {
      const processedUser = {
        token: user.token,
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        profile: user.profile,
        userLoaded: user.userLoaded,
        // hasLock: u.hasLock,
        passcode: u?.passcode,
      };

      dispatch(checkUser(processedUser));
    }
  }, [user, dispatch]);

  const theme = {
    bg: color,
  };

  return (
    <ThemeProvider theme={theme}>
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
      <ManageAccount />
      <LockAccount />
      <PassCodeCheck />
      <SettingsModal />
      <ViewStory />
      <PairFilter />

      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/coming-soon" index element={<ComingSoon />} />
        <Route path="/auth/login" index element={<Login />} />
        <Route path="/auth/sign-up" index element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/ideas" element={<Setups />} />
        <Route path="/dashboard/saved" element={<Saved />} />
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
    </ThemeProvider>
  );
}

export default App;
