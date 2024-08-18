import { useEffect } from "react";

/**
 * This Hook can be used for detecting clicks outside the Opened Menu
 */
export function useClickOutside(refs, onClickOutside) {
  useEffect(() => {
    /**
     * Invoke Function onClick outside of element
     */
    function handleClickOutside(event) {
      let didClickInsideRefs = false;
      refs.forEach((element) => {
        if (element.current && element.current.contains(event.target)) {
          didClickInsideRefs = true;
        }
      });

      if (!didClickInsideRefs) {
        onClickOutside();
      }
    }
    // Bind
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // dispose
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, onClickOutside]);
}
