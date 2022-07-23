import { Route, Routes } from "react-router-dom";
import NotFound from "./error/NotFound";
import IndexPage from "./containers/Index/IndexPage";
import MainPage from "./containers/Main/MainPage";
import Profile from "./containers/Profile/Profile";
import UnitPage from "./containers/Unit/UnitPage";
import SignUp from "./containers/SignUp/SignUp";
import ScrollToTop from "./components/Common/ScrollToTop";
import SmallPage from "./containers/Small/SmallPage";
import FinishModal from "./components/FinishModal/FinishModal";
import { EpiloguePage } from "./containers/Epilogue/EpiloguePage";
import { AppendixPage } from "./containers/Appendix/AppendixPage";

function App() {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/lesson/:lessonID" element={<IndexPage />} />
          <Route
            exact
            path="/lesson/:lessonID/chapter/:chID/unit/:uID"
            element={<UnitPage />}
          />
          <Route
            exact
            path="/lesson/:lessonID/chapter/:chID/unit/:uID/small/:sID"
            element={<SmallPage />}
          />
          <Route
            exact
            path="/lesson/:lessonID/finish"
            element={<FinishModal />}
          />
          <Route exact path="/epilogue" element={<EpiloguePage />} />
          <Route exact path="/appendix/:aID" element={<AppendixPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
