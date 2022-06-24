import { Route, Routes } from "react-router-dom";
import IndexPage from "./containers/Index/IndexPage";
import MainPage from "./containers/Main/MainPage";
import Profile from "./containers/Profile/Profile";
import ChNav from "./controls/ChNav";
import UnitNav from "./controls/UnitNav";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/cosmonaut-frontend" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/lesson/:lessonID" element={<IndexPage />} />
        <Route path="/lesson/:lessonID/chapter/:chID" element={<ChNav />} />
        <Route
          path="/lesson/:lessonID/chapter/:chID/unit/:uID"
          element={<UnitNav />}
        />
      </Routes>
    </div>
  );
}

export default App;
