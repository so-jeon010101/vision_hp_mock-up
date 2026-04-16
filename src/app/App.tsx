import VisionHpMainV from "../imports/VisionHpMainV3";
import { useScrollReveal } from "./components/ScrollAnimations";

export default function App() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef} className="w-full min-h-screen overflow-x-clip">
      <VisionHpMainV />
    </div>
  );
}
