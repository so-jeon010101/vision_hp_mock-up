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
    if (!(htmlEl.textContent || "").trim()) return;
    htmlEl.style.overflow = "hidden";

    let globalCharIndex = 0;
    const splitNode = (node: Node, parent: HTMLElement) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || "";
        text.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.display = "inline-block";
          span.style.opacity = "0";
          span.style.transform = "translateY(100%)";
          const delay = i * 0.1 + globalCharIndex * 0.03;
          span.style.transition = `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`;
          parent.appendChild(span);
          globalCharIndex++;
        });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const src = node as HTMLElement;
        const wrapper = src.cloneNode(false) as HTMLElement;
        Array.from(src.childNodes).forEach((child) => splitNode(child, wrapper));
        parent.appendChild(wrapper);
      }
    };

    const children = Array.from(htmlEl.childNodes);
    htmlEl.innerHTML = "";
    children.forEach((child) => splitNode(child, htmlEl));
  });

  // Trigger after a short delay
  requestAnimationFrame(() => {
    setTimeout(() => {
      heroTexts.forEach((el) => {
        const spans = (el as HTMLElement).querySelectorAll("span:not(:has(span))");
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
    htmlEl.style.overflow = "hidden";

    let globalCharIndex = 0;
    const splitNode = (node: Node, parent: HTMLElement) => {
      if (node.nodeType === Node.TEXT_NODE) {
        (node.textContent || "").split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.display = "inline-block";
          span.style.opacity = "0";
          span.style.transform = "translateY(100%)";
          const delay = globalCharIndex * 0.03;
          span.style.transition = `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`;
          parent.appendChild(span);
          globalCharIndex++;
        });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const src = node as HTMLElement;
        const wrapper = src.cloneNode(false) as HTMLElement;
        Array.from(src.childNodes).forEach((child) => splitNode(child, wrapper));
        parent.appendChild(wrapper);
      }
    };

    const children = Array.from(htmlEl.childNodes);
    htmlEl.innerHTML = "";
    children.forEach((child) => splitNode(child, htmlEl));
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
