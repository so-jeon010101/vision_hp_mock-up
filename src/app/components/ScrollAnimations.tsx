import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    // Find all major sections to animate
    const selectors = [
      '[data-name="features"]',
      '[data-name="Reason"]',
      '[data-name="case_study"]',
      '[data-name="voices"]',
      '[data-name="result"]',
      '[data-name="process"]',
      '[data-name="plan"]',
      '[data-name="faq"]',
      '[data-name="section_cta"]',
      '[data-name="footer"]',
      '[data-name="tlt"]',
      '[data-name="container"]',
      '[data-name="contaienr"]',
      '[data-name="text"]',
      '[data-name="caption"]',
      '[data-name="customer"]',
    ];

    const sections = container.querySelectorAll(selectors.join(","));

    // Apply initial hidden state
    sections.forEach((section) => {
      const el = section as HTMLElement;
      el.style.opacity = "0";
      el.style.transform = "translateY(60px)";
      el.style.transition =
        "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
    });

    // Text split animation for headings
    const headingSelectors = [
      '[data-name="kv"] p',
    ];
    // We'll handle text split separately below

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Staggered animation for grid/list children
    const staggerContainers = container.querySelectorAll(
      '[data-name="features"] [data-name="contaienr"] > *,' +
      '[data-name="process"] [data-name="step"]'
    );

    // Apply text split animation to hero text
    applyTextSplitAnimation(container);

    return () => {
      observer.disconnect();
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return containerRef;
}

function applyTextSplitAnimation(container: HTMLElement) {
  // Find hero text elements and major section titles
  const heroTexts = container.querySelectorAll(
    '[data-name="kv"] > div:not([data-name="HeroImage_container"]) p'
  );

  heroTexts.forEach((el, i) => {
    const htmlEl = el as HTMLElement;
    const text = htmlEl.textContent || "";
    if (!text.trim()) return;

    // Split into characters
    const chars = text.split("");
    htmlEl.innerHTML = "";
    htmlEl.style.overflow = "hidden";

    chars.forEach((char, charIndex) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transform = "translateY(100%)";
      span.style.transition = `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${(i * 0.1 + charIndex * 0.03)}s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${(i * 0.1 + charIndex * 0.03)}s`;
      htmlEl.appendChild(span);
    });
  });

  // Trigger after a short delay
  requestAnimationFrame(() => {
    setTimeout(() => {
      heroTexts.forEach((el) => {
        const spans = (el as HTMLElement).querySelectorAll("span");
        spans.forEach((span) => {
          span.style.opacity = "1";
          span.style.transform = "translateY(0)";
        });
      });
    }, 300);
  });

  // Section title text split with scroll trigger
  const sectionTitles = container.querySelectorAll(
    '[data-name="tlt"] p'
  );

  sectionTitles.forEach((el) => {
    const htmlEl = el as HTMLElement;
    const text = htmlEl.textContent || "";
    if (!text.trim() || text.length > 50) return;

    const chars = text.split("");
    htmlEl.innerHTML = "";
    htmlEl.style.overflow = "hidden";

    chars.forEach((char, charIndex) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transform = "translateY(100%)";
      span.style.transition = `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${charIndex * 0.03}s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${charIndex * 0.03}s`;
      htmlEl.appendChild(span);
    });
  });

  const titleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const spans = (entry.target as HTMLElement).querySelectorAll("span");
          spans.forEach((span) => {
            span.style.opacity = "1";
            span.style.transform = "translateY(0)";
          });
          titleObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  sectionTitles.forEach((el) => titleObserver.observe(el));
}
