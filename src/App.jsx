import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import TravelPersonalPage from "./pages/TravelPersonalPage.jsx";
import HospitalityRetailPage from "./pages/HospitalityRetailPage.jsx";
import CommissionedWorkPage from "./pages/CommissionedWorkPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/travel-personal" element={<TravelPersonalPage />} />
      <Route path="/hospitality-retail" element={<HospitalityRetailPage />} />
      <Route path="/commissioned-work" element={<CommissionedWorkPage />} />
    </Routes>
  );
}

export default App;
