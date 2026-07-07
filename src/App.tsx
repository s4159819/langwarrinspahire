import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingCall } from "./components/CallButton";
import Home from "./routes/index";
import Spas from "./routes/spas";
import ServiceArea from "./routes/service-area";
import HireTerms from "./routes/hire-terms";
import Contact from "./routes/contact";
import NotFound from "./routes/not-found";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spas" element={<Spas />} />
          <Route path="/service-area" element={<ServiceArea />} />
          <Route path="/hire-terms" element={<HireTerms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingCall />
    </div>
  );
}
