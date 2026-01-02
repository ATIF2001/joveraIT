import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Nav from "./components/navbar";
import Footer from "./components/footer";
import Topbar from "./components/top-bar";

import Home from "./pages/home";
import Contact_us from "./pages/contact_us";
import Media from "./pages/media";
import NewsDetail from "./pages/media-article";
import ServicesSection from "./pages/portfolio";
import ITLandingPage from "./pages/landing-pages/jovera-it-service";
import FinanceLandingPage from "./pages/landing-pages/jovera-financial-service";
import RealEstateLandingPage from "./pages/landing-pages/jovera-real-estate";
import BusinessLandingPage from "./pages/landing-pages/jovera-business-service";
import TourismLandingPage from "./pages/landing-pages/jovera-tourism-service";
import AccountingLandingPage from "./pages/landing-pages/jovera-accounting";
import TermsAndConditions from "./pages/terms_and_conditions";
import UnderDevelopment from "./pages/under-development";
import AboutUs from "./pages/about_us";
import Careers from "./pages/career";
import JobDetails from "./pages/career-job";
import ScrollToTop from "../src/components/ScrollToTop";
import Jovera404 from "./pages/404";

import "./App.css";

function App() {
  // Load language from localStorage if it exists, otherwise default to "en"
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "en";
  });

  // Whenever lang changes, update localStorage
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <Router>
       <ScrollToTop />
      <Topbar lang={lang} />
      <Nav lang={lang} setLang={setLang} />

      <Routes>
        
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/portfolio" element={<ServicesSection lang={lang} />} />
        <Route path="/MediaHub" element={<Media lang={lang} />} />
        <Route path="/ContactUs" element={<Contact_us lang={lang} />} />
        <Route path="/AboutUs" element={<AboutUs lang={lang} />} />
        <Route path="/IT" element={<ITLandingPage lang={lang} />} />
        <Route path="/Finance" element={<FinanceLandingPage lang={lang} />} />
        <Route path="/RealEstate" element={<RealEstateLandingPage lang={lang} />} />
        <Route path="/Business" element={<BusinessLandingPage lang={lang} />} />
        <Route path="/Tourism" element={<TourismLandingPage lang={lang} />} />
        <Route path="/Accounting" element={<AccountingLandingPage lang={lang} />} />
        <Route path="/Terms_and_Conditions" element={<TermsAndConditions lang={lang} />} />
        <Route path="/Career" element={<Careers lang={lang} />} />
        <Route path="/careers/:jobId" element={<JobDetails lang={lang} />} />
        <Route path="news/:id" element={<NewsDetail lang={lang} />} />

        {/* Under Development */}
        <Route path="/UnderDevelopment" element={<UnderDevelopment lang={lang} />} />
        {/* 404 – Must be LAST */}
        <Route path="*" element={<Jovera404 lang={lang} />} />
      </Routes>

      <Footer lang={lang} />
    </Router>
  );
}

export default App;
