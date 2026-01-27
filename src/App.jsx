import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import CommissionedWorkPage from "./pages/CommissionedWorkPage.jsx";
import HospitalityRetailPage from "./pages/HospitalityRetailPage.jsx";
import TravelPersonalPage from "./pages/TravelPersonalPage.jsx";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="page-main">
        <div className="layout-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/commissioned" element={<CommissionedWorkPage />} />
            <Route path="/hospitality" element={<HospitalityRetailPage />} />
            <Route path="/travel" element={<TravelPersonalPage />} />
            <Route path="/prints" element={<div>Prints coming soon.</div>} />
            <Route path="/contact" element={<div>Contact coming soon.</div>} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
