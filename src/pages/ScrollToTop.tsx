import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { waitAndScrollToHash } from "@/lib/navigation";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      waitAndScrollToHash(hash);
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
