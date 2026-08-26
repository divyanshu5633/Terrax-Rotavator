import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component:
 * Resets the window scroll position to the absolute top (0, 0)
 * whenever the route / pathname changes.
 * Disables browser auto scroll restoration.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser scroll restoration to prevent fighting custom scroll behavior
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // Immediately scroll to the top of the page on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior, // Instant reset, not smooth
    });
  }, [pathname]);

  return null;
}
