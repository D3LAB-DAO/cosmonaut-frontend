import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./error/NotFound";
import IndexPage from "./containers/Index/IndexPage";
import MainPage from "./containers/Main/MainPage";
import Profile from "./containers/Profile/Profile";
import UnitPage from "./containers/Unit/UnitPage";
import SignUp from "./containers/SignUp/SignUp";
import ScrollToTop from "./components/Common/ScrollToTop";
import { EpiloguePage } from "./containers/Epilogue/EpiloguePage";
import { AppendixPage } from "./containers/Appendix/AppendixPage";
import IndexInitialPage from "./containers/Index/IndexInitialPage";
import ProblemPage from "./containers/Problem/ProblemPage";
import AdvancePage from "./containers/Advanced/AdvancePage";
import { useRecoilState } from "recoil";
import { LoginState } from "./states/login";

const Console = (prop) => (
    console[Object.keys(prop)[0]](...Object.values(prop)), null // ➜ React components must return something
);

function App() {
<<<<<<< HEAD
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/index"
            element={
              isLoggedIn ? (
                <IndexInitialPage />
              ) : (
                <Navigate to="/signUp" replace />
              )
            }
          />
          <Route
            path="/lesson/:lessonID"
            element={
              isLoggedIn ? <IndexPage /> : <Navigate to="/signUp" replace />
            }
          />
          <Route
            path="/lesson/:lessonID/chapter/:chID/unit/:uID"
            element={
              isLoggedIn ? <UnitPage /> : <Navigate to="/signUp" replace />
            }
          />
          <Route
            path="/lesson/:lessonID/chapter/:chID/unit/:uID/pb/:pID"
            element={
              isLoggedIn ? <ProblemPage /> : <Navigate to="/signUp" replace />
            }
          />
          <Route
            path="/epilogue"
            element={
              isLoggedIn ? <EpiloguePage /> : <Navigate to="/signUp" replace />
            }
          />
          <Route
            path="/appendix/:aID"
            element={
              isLoggedIn ? <AppendixPage /> : <Navigate to="/signUp" replace />
            }
          />
          <Route
            path="/advanced/:adID/index/:iID"
            element={
              isLoggedIn ? <AdvancePage /> : <Navigate to="/signUp" replace />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </>
  );
=======
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
    console.log(isLoggedIn);

    return (
        <>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route
                        path="/index"
                        element={
                            isLoggedIn ? (
                                <IndexInitialPage />
                            ) : (
                                <Navigate to="/signUp" replace />
                            )
                        }
                    />
                    <Route
                        path="/lesson/:lessonID"
                        element={
                            isLoggedIn ? (
                                <IndexPage />
                            ) : (
                                <Navigate to="/signUp" replace />
                            )
                        }
                    />
                    <Route
                        path="/lesson/:lessonID/chapter/:chID/unit/:uID"
                        element={
                            isLoggedIn ? (
                                <UnitPage />
                            ) : (
                                <Navigate to="/signUp" replace />
                            )
                        }
                    />
                    <Route
                        path="/lesson/:lessonID/chapter/:chID/unit/:uID/pb/:pID"
                        element={
                            isLoggedIn ? (
                                <ProblemPage />
                            ) : (
                                <Navigate to="/signUp" replace />
                            )
                        }
                    />
                    <Route
                        path="/epilogue"
                        element={
                            isLoggedIn ? (
                                <EpiloguePage />
                            ) : (
                                <Navigate to="/signUp" replace />
                            )
                        }
                    />
                    <Route
                        path="/appendix/:aID"
                        element={
                            isLoggedIn ? (
                                <AppendixPage />
                            ) : (
                                <Navigate to="/signUp" replace />
                            )
                        }
                    />
                    <Route
                        path="/advanced/:adID/index/:iID"
                        element={
                            isLoggedIn ? (
                                <AdvancePage />
                            ) : (
                                <Navigate to="/signUp" replace />
                            )
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ScrollToTop>
        </>
    );
>>>>>>> f4cd539acdbff0a07eba481feb5067e35633812d
}

export default App;
