import { useEffect } from "react";
import { useLocation } from "react-router";
import VisionHpMainV from "../imports/VisionHpMainV3";
import { useScrollReveal } from "./components/ScrollAnimations";

export default function App() {
  const containerRef = useScrollReveal();
  const location = useLocation();

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!target) return;
    const t = setTimeout(() => {
      const el = document.querySelector(`[data-name="${target}"]`);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 120);
    return () => clearTimeout(t);
  }, [location]);

  return (
    <div ref={containerRef} className="w-full min-h-screen overflow-x-clip">
      <VisionHpMainV />
    </div>
  );
}
