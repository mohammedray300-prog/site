import { useEffect } from "react";

/**
 * Attaches a global IntersectionObserver that adds ".in" to any element
 * with class "reveal" once it enters the viewport.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    document
      .querySelectorAll<HTMLElement>(".reveal")
      .forEach((el) => el.classList.add("in"));
  }, []);
}