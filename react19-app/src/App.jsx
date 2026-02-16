import { useState, useEffect } from "react";
import TitleChange from './components/TitleChange'
import User from './components/Users'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0);

  // Case 1: useEffect WITHOUT dependency array
  useEffect(() => {
    console.log("Render hua");
    console.log("Welcome React 19");
  });
  // 👉 Har render pe chalega
  // ⚠️ Rarely use

  // Case 2: Empty dependency array [] ✅ (MOST COMMON)
  useEffect(() => {
    console.log("Component mounted");
    console.log("👉 Sirf 1 baar (page load jaisa)");
  }, []);
  // 👉 Sirf 1 baar (page load jaisa)
  // 📌 API calls yahin likhte hain

  // Case 3: Dependency ke saath
  useEffect(() => {
    console.log("Count change hua");
  }, [count]);
  // 👉 Jab count change hoga tab effect chalega

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Running...");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  // 👉 Component unmount hone pe cleanup

  return (
    <>
      <h3>{count}</h3>
      <button onClick={()=>  setCount( count + 1 )}>+</button>
      
      {/* Real Example – Document Title Change */}
      <TitleChange/>

      {/* API Call Example  */}
      <User/>

      <Todo/>
    </>
  );
}

export default App;

// useEffect ka basic syntax
// useEffect(() => {
//   // side effect code

//   return () => {
//     // cleanup code (optional)
//   };
// }, [dependencies]);
