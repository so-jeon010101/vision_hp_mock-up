
  import { useEffect, type ReactNode } from "react";
  import { createRoot } from "react-dom/client";
  import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
  import App from "./app/App.tsx";
  import ContactPage from "./app/components/ContactPage.tsx";
  import ThankYouPage from "./app/components/ThankYouPage.tsx";
  import "./styles/index.css";

  function GlobalCtaHandler({ children }: { children: ReactNode }) {
    const navigate = useNavigate();
    useEffect(() => {
      const handler = (e: MouseEvent) => {
        const target = e.target as HTMLElement | null;
        if (!target) return;
        const cta = target.closest('[data-name="cta"]') as HTMLElement | null;
        if (!cta) return;
        if (cta.closest('a[href^="tel:"]')) return;
        if (!cta.textContent?.includes("無料資料")) return;
        e.preventDefault();
        if (window.location.pathname === "/contact") {
          document.getElementById("form")?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          navigate("/contact");
          window.scrollTo({ top: 0, behavior: "auto" });
        }
      };
      document.addEventListener("click", handler);
      return () => document.removeEventListener("click", handler);
    }, [navigate]);
    return <>{children}</>;
  }

  createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <GlobalCtaHandler>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
        </Routes>
      </GlobalCtaHandler>
    </BrowserRouter>
  );
