// 🧩 PHASE 2: Hooks Deep Dive (Day 4–7)
// Phase Name: Reusability & Clean Architecture (React 19)
// 📅 DAY 6 – Custom Hooks (Deep & Practical)
// 👉 Custom Hooks = clean code + reusable logic + interview GOLD 🥇

import useCounter from "./hooks/useCounter";
import useFetch from "./hooks/useFetch";
import usePrevious from "./hooks/usePrevious";
import useToggle from "./hooks/useToggle";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  // ✅ Hooks MUST be top-level
  const { count, increment, decrement } = useCounter(5);
  const prevCount = usePrevious(count);

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const [isOpen, toggle] = useToggle(false);
  const [name, setName] = useLocalStorage("username", "");

  // ✅ Early return pattern (BEST PRACTICE)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h2>Count: {count}</h2>
      <h3>Previous Count: {prevCount}</h3>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <hr />

      {/* API DATA */}
      <ul>
        {data.slice(0, 5).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <hr />

      {/* TOGGLE */}
      <button onClick={toggle}>
        {isOpen ? "ON" : "OFF"}
      </button>

      <hr />

      {/* LOCAL STORAGE */}
      <input
        placeholder="Enter name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </>
  );
}

export default App;

// ❌ Problem
// Same logic multiple components me copy-paste

// ✅ Solution
// Logic ko custom hook bana do

// 🧠 Rules of Custom Hooks (Interview MUST)
// 1️⃣ Name starts with "use"
// 2️⃣ Hooks sirf top-level par
// 3️⃣ Sirf component ya custom hook ke andar
// 4️⃣ ❌ Conditions / loops / nested functions ke andar nahi