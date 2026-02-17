// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [dark, setDark] = useState(false);

//   // ❌ Heavy calculation
//   function slowCalculation(num) {
//     console.log("Calculation chal rahi hai...");
//     for (let i = 0; i < 1_000_000_000; i++) {}
//     return num * 2;
//   }

//   const result = slowCalculation(count);

//   return (
//     <>
//       <h2>Result: {result}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Count +
//       </button>

//       <button onClick={() => setDark(!dark)}>
//         Toggle Theme
//       </button>
//     </>
//   );
// }

// export default App;
import { useState, useMemo } from "react";

function Expensive() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const result = useMemo(() => {
    console.log("Calculation chal rahi hai...");
    for (let i = 0; i < 1_000_000_000; i++) {}
    return count * 2;
  }, [count]); // 👈 sirf count change pe

  return (
    <>
      <h2>Result: {result}</h2>

      <button onClick={() => setCount(count + 1)}>
        Count +
      </button>

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </>
  );
}

export default Expensive;
