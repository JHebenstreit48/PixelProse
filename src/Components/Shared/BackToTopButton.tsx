import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "@/SCSS/PageStyles/BackToTop.scss";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [offsetBottom, setOffsetBottom] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);

      const footer = document.querySelector("footer, .siteFooter");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const overlap = window.innerHeight - rect.top;
        // If footer is visible, lift the button up by the overlap distance
        setOffsetBottom(overlap > 0 ? overlap + 16 : 16);
      } else {
        setOffsetBottom(16);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => window.scrollTo(0, 0);

  if (!isVisible) return null;

  return createPortal(
    <button
      className="scrollToTop"
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        // dynamically lift above footer when needed
        bottom: `calc(${offsetBottom}px + env(safe-area-inset-bottom))`,
      }}
    >
      <span className="scrollArrow">↑</span>
    </button>,
    document.body
  );
};

export default ScrollToTopButton;