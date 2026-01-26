import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import TravelPersonalPage from "./pages/TravelPersonalPage.jsx";
import HospitalityRetailPage from "./pages/HospitalityRetailPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/travel-personal" element={<TravelPersonalPage />} />
      <Route path="/hospitality-retail" element={<HospitalityRetailPage />} />
    </Routes>
  );
}

export default App;
