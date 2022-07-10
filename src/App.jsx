import { Route, Routes } from "react-router-dom";
import NotFound from "./error/NotFound";
import IndexPage from "./containers/Index/IndexPage";
import MainPage from "./containers/Main/MainPage";
import Profile from "./containers/Profile/Profile";
import UnitPage from "./containers/Unit/UnitPage";
import SignUp from "./containers/SignUp/SignUp";
import L0C4Finish from "./containers/Chapter/lesson0/chapter4/L0C4Finish";
import ScrollToTop from "./components/Common/ScrollToTop";
import SmallPage from "./containers/Small/SmallPage";

function App() {
  return (
    <div>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/lesson/:lessonID" element={<IndexPage />} />
          <Route
            path="/lesson/:lessonID/chapter/:chID/unit/:uID"
            element={<UnitPage />}
          />
          <Route
            path="/lesson/:lessonID/chapter/:chID/unit/:uID/small/:sID"
            element={<SmallPage />}
          />
          <Route path="/lesson/0/finish" element={<L0C4Finish />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
