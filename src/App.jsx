// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import HomePage from "./pages/HomePage.jsx";
import TravelPersonalPage from "./pages/TravelPersonalPage.jsx";
import HospitalityRetailPage from "./pages/HospitalityRetailPage.jsx";
import CommissionedWorkPage from "./pages/CommissionedWorkPage.jsx";
import PrintsPage from "./pages/PrintsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {
  return (
    <div className="app-shell">
      <Header />

      <main className="page-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/travel" element={<TravelPersonalPage />} />
          <Route path="/hospitality" element={<HospitalityRetailPage />} />
          <Route path="/commissioned" element={<CommissionedWorkPage />} />
          <Route path="/prints" element={<PrintsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
