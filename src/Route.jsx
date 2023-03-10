import { createBrowserRouter, Route, Routes } from "react-router-dom";
import {
  AccountBlock,
  AccountPageContainer,
} from "./components/account/AccountBlock";
import "./styles/animation.css";
import ChatHistoryPage from "./pages/ChathistoryPage";
import ChatPage from "./pages/ChatPage";
import FirstPage from "./pages/FirstPage";
import FirstProfilePage from "./pages/FirstProfilePage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import MomentPage from "./pages/MomentPage";
import MyChatPage from "./pages/MyChatPage";
import MyChatSettingPage from "./pages/MyChatSettingPage";
import NotfountPage from "./pages/NotfountPage";
import ProfilePage from "./pages/ProfilePage";
import SettingPage from "./pages/SettingPage";
import SignupPage from "./pages/SignupPage";
import { AnimatePresence } from "framer-motion";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     children: [
//       {
//         path: "room",
//         element: <ChatPage />,
//       },
//     ],
//     errorElement: <NotfountPage />,
//   },
// ]);

const RouteInfo = () => {
  const isLogined = false;
  return (
    <>
      {isLogined ? (
        <Routes>
          <AnimatePresence>
            <Route path="/" element={<Home />} />
            <Route path="/room/:id" element={<ChatPage />} />
            <Route path="/moment/:id" element={<MomentPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/history" element={<ChatHistoryPage />} />
            <Route path="/profile/myroom" element={<MyChatPage />} />
            <Route
              path="/profile/myroom/setting/:id"
              element={<MyChatSettingPage />}
            />
            <Route path="/profile/setting" element={<SettingPage />} />
            <Route path="*" element={<NotfountPage />} />
          </AnimatePresence>
        </Routes>
      ) : (
        <AccountPageContainer>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/account/login" element={<LoginPage />} />
            <Route path="/account/signup" element={<SignupPage />} />
            <Route
              path="/account/profilesetting"
              element={<FirstProfilePage />}
            />
            <Route path="*" element={<NotfountPage />} />
          </Routes>
        </AccountPageContainer>
      )}
    </>
  );
};

export default RouteInfo;
