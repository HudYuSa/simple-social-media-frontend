import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/Pages/HomePage";
import SigninPage from "./components/pages/SigninPage";
import SignupPage from "./components/pages/SignupPage";
import RequireAuth from "./components/middlewares/RequiredAuth";
import ExplorePage from "./components/pages/ExplorePage";
import MessagesPage from "./components/pages/MessagesPage";
import UserPage from "./components/pages/UserPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route element={<RequireAuth />}> */}
          <Route index element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/:userid" element={<UserPage />} />
          {/* </Route> */}
        </Route>

        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};
export default App;
