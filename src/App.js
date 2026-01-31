import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, Suspense, lazy } from "react";

import Nav from "./components/navbar";
import Footer from "./components/footer";
import Topbar from "./components/TopBar";
import Loader from "./components/loader";
import ScrollToTop from "./components/ScrollToTop";

import TermsAndConditions from "./pages/TermsAndConditions";
import UnderDevelopment from "./pages/UnderDevelopment";
import JobDetails from "./pages/CareerJob";
import Jovera404 from "./pages/404";

// Services
import DigitalDevelopment from "./pages/Services/digitalDevelopment";
import Marketing from "./pages/Services/Marketing";
import Design from "./pages/Services/design";
import ITservice from "./pages/Services/IT";

import "./App.css";

// ✅ Lazy-loaded pages (KEEP TOGETHER)
const Home = lazy(() => import("./pages/home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contact_us = lazy(() => import("./pages/ContactUs"));
const Blog = lazy(() => import("./pages/Blog"));
const Careers = lazy(() => import("./pages/CareerPage"));

function App() {
  const [lang, setLang] = useState(
    () => localStorage.getItem("lang") || "en"
  );

  return (
    <Router>
      <ScrollToTop />
      <Topbar lang={lang} />
      <Nav lang={lang} setLang={setLang} />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/ContactUs" element={<Contact_us lang={lang} />} />
          <Route path="/AboutUs" element={<AboutUs lang={lang} />} />
          
          <Route path="/blog" element={<Blog lang={lang} />} />
          <Route path="/blog/:slug" element={<Blog  lang={lang}/>} />

          <Route path="/Career" element={<Careers lang={lang} />} />
          <Route path="/Careers/:jobId" element={<JobDetails lang={lang} />} />
          <Route
            path="/TermsAndConditions"
            element={<TermsAndConditions lang={lang} />}
          />

          {/* Services */}
          <Route
            path="/DigitalDevelopment"
            element={<DigitalDevelopment lang={lang} />}
          />
          <Route path="/IT" element={<ITservice lang={lang} />} />
          <Route path="/Marketing" element={<Marketing lang={lang} />} />
          <Route path="/design" element={<Design lang={lang} />} />

          <Route
            path="/UnderDevelopment"
            element={<UnderDevelopment lang={lang} />}
          />

          <Route path="*" element={<Jovera404 lang={lang} />} />
        </Routes>
      </Suspense>

      <Footer lang={lang} />
    </Router>
  );
}

export default App;
