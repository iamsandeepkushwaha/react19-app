// Performance & DOM Control (React 19)
// 📅 DAY 5 – useRef, useMemo, useCallback

// 👉 useRef
// DOM elements ko direct access karta hai
// Value store karta hai bina component ko re-render kiye
// Previous value ya mutable data rakhne ke kaam aata hai

import FocusInput from "./components/FocusInput";
import Counter from "./components/Counter";

// 👉 useMemo
// Heavy calculation ko memoize karta hai
// Jab dependency change hoti hai tabhi calculation dobara hoti hai
import Expensive from "./components/Expensive";

// 👉 useCallback + React.memo
// Function reference ko memoize karta hai
// Child component ke unnecessary re-render ko prevent karta hai
import Parent from "./components/Parent";

function App() {
  return (
    <>
      {/* useRef example */}
      <FocusInput />
      <Counter />

      {/* useMemo – value memoization */}
      {/* Jab count change hoga tabhi expensive calculation chalega */}
      <Expensive />

      {/* useCallback + React.memo */}
      {/* Same function reference pass hota hai to Child re-render nahi hota */}
      <Parent />
    </>
  );
}

export default App;

/*
🧠 Summary (ratne wali lines):

- useRef → value store karta hai bina re-render
- useMemo → heavy calculation ko cache karta hai
- useCallback → function reference ko stable rakhta hai
- React.memo → props same ho to re-render rok deta hai
*/
