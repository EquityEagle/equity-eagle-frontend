import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import { GlobalStyles, LeftBlur, Stars } from "./styles/Global";
import { GetStarted, LandingPage } from "./pages";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      {/* <LeftBlur className="top-[11rem] left-[10rem]" /> */}
      <Stars className="top-[12rem] left-[5rem]" />
      <Stars className="top-[11rem] left-[25rem]" />
      <Stars className="top-[12rem] left-[44rem]" />
      <Stars className="top-[15rem] left-[60rem]" />
      <Stars className="top-[21rem] left-[71rem]" />
      <Stars className="top-[30rem] left-[68rem]" />
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/get-started" index element={<GetStarted />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
