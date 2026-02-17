import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}

export default FocusInput;

// 🔹 Example 1: Input focus 🔥
// 👉 ref.current = actual DOM element