import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import { GlobalStyles, LeftBlur, Stars } from "./styles/Global";
import { GetStarted, LandingPage } from "./pages";
import { MenuModal } from "./modal";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <MenuModal />
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/get-started" index element={<GetStarted />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
