import { Route, Routes } from "react-router-dom";
import FullProfileComp from "./Home/Profile/FullProfile";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AccessibilityPage from "./Pages/AccessibilityPage/AccessibilityPage";
import { HomePage } from "./Pages/HomePage";
import { AppLayout } from "./Components/Layout";
import "./App.css";
import { ProfilePage } from "./Pages/ProfilePage";
import { AppRoutes } from "./Core/constants";
function App() {
  return (
    <Routes>
      <Route path={AppRoutes.ROOT} element={<AppLayout />}>
        <Route path={AppRoutes.ROOT} element={<HomePage />} index />
        <Route
          path={`${AppRoutes.PROFILE}/:profileId`}
          element={<ProfilePage />}
        />
        <Route path={AppRoutes.CONTACT} element={<ContactPage />} />
        <Route path={AppRoutes.ACCESSIBILITY} element={<AccessibilityPage />} />
      </Route>
    </Routes>
  );
}

export default App;
