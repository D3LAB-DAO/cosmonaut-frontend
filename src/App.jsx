import { Route, Routes } from "react-router-dom";
import NotFound from "./error/NotFound";
import ChapterPage from "./containers/Chapter/ChapterPage";
import IndexPage from "./containers/Index/IndexPage";
import MainPage from "./containers/Main/MainPage";
import Profile from "./containers/Profile/Profile";
import UnitPage from "./containers/Unit/UnitPage";
import SignUp from "./containers/SignUp/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/cosmonaut-frontend" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/lesson/:lessonID" element={<IndexPage />} />
        <Route
          path="/lesson/:lessonID/chapter/:chID"
          element={<ChapterPage />}
        />
        <Route
          path="/lesson/:lessonID/chapter/:chID/unit/:uID"
          element={<UnitPage />}
        />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
