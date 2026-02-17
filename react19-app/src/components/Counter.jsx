import { useState, useEffect, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <>
      <h2>Current: {count}</h2>
      <h3>Previous: {prevCount.current}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default Counter;

// Previous Value Store Karna (useRef)

// Change hone pe re-render ❌
// Memory jaisa behave karta hai ✅