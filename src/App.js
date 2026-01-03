import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Nav from "./components/navbar";
import Footer from "./components/footer";
import Topbar from "./components/TopBar";

import Home from "./pages/home";
import Contact_us from "./pages/ContactUs";
import Media from "./pages/media";
import NewsDetail from "./pages/MediaArticle";
import ServicesSection from "./pages/portfolio";
import ITLandingPage from "./pages/LandingPages/JoveraITService";
import FinanceLandingPage from "./pages/LandingPages/JoveraFinancialService";
import RealEstateLandingPage from "./pages/LandingPages/JoveraRealEstate";
import BusinessLandingPage from "./pages/LandingPages/JoveraBusinessService";
import TourismLandingPage from "./pages/LandingPages/JoveraTourismService";
import AccountingLandingPage from "./pages/LandingPages/JoveraAccounting";
import TermsAndConditions from "./pages/TermsAndConditions";
import TermsAndConditionsFinance from "./pages/FinanceTermsAndConditions";
import PrivacyPolicyFinance  from "./pages/PrivacyPolicyFinance";
import AccountDeletionFinance from "./pages/AccountDeletionFinance";
import UnderDevelopment from "./pages/UnderDevelopment";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/CareerPage";
import JobDetails from "./pages/CareerJob";
import ScrollToTop from "../src/components/ScrollToTop";
import Jovera404 from "./pages/404";

import "./App.css";

function App() {
  // Language state
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <Router>
      <ScrollToTop />
      <Topbar lang={lang} />
      <Nav lang={lang} setLang={setLang} />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/Portfolio" element={<ServicesSection lang={lang} />} />
        <Route path="/MediaHub" element={<Media lang={lang} />} />
        <Route path="/ContactUs" element={<Contact_us lang={lang} />} />
        <Route path="/AboutUs" element={<AboutUs lang={lang} />} />

        {/* IT */}
        <Route path="/IT" element={<ITLandingPage lang={lang} />} />

        {/* Finance - Parent + Subpage */}
        <Route path="/Finance" element={<FinanceLandingPage lang={lang} />} />
        <Route 
          path="/Finance/TermsAndConditions" 
          element={<TermsAndConditionsFinance lang={lang} />} 
          caseSensitive={false} 
        />
           <Route 
          path="/Finance/AccountDeletion" 
          element={<AccountDeletionFinance lang={lang} />} 
          caseSensitive={false} 
        />
           <Route 
          path="/Finance/PrivacyPolicy" 
          element={<PrivacyPolicyFinance lang={lang} />} 
          caseSensitive={false} 
        />

        {/* Real Estate */}
        <Route path="/RealEstate" element={<RealEstateLandingPage lang={lang} />} />

        {/* Business */}
        <Route path="/Business" element={<BusinessLandingPage lang={lang} />} />

        {/* Tourism */}
        <Route path="/Tourism" element={<TourismLandingPage lang={lang} />} />

        {/* Accounting */}
        <Route path="/Accounting" element={<AccountingLandingPage lang={lang} />} />

        {/* General Terms and Conditions */}
        <Route path="/TermsAndConditions" element={<TermsAndConditions lang={lang} />} />
        {/* <Route path="/Terms_and_Conditions" element={<TermsAndConditions lang={lang} />} /> */}

        {/* Careers */}
        <Route path="/Career" element={<Careers lang={lang} />} />
        <Route path="/Careers/:jobId" element={<JobDetails lang={lang} />} />

        {/* News */}
        <Route path="/News/:id" element={<NewsDetail lang={lang} />} />

        {/* Under Development */}
        <Route path="/UnderDevelopment" element={<UnderDevelopment lang={lang} />} />

        {/* 404 - Must be last */}
        <Route path="*" element={<Jovera404 lang={lang} />} />
      </Routes>

      <Footer lang={lang} />
    </Router>
  );
}

export default App;
