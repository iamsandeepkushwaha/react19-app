import { useEffect, useRef } from "react";

// Custom Hook: Previous Value Tracker
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious;

// Custom Hook + useRef
// Previous Value Hook