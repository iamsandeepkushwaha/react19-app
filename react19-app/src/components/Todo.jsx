import { useState, useEffect } from "react";

function TodoPro() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setTodos(data);
    } catch (err) {
      setError("❌ Data load nahi hua");
    } finally {
      setLoading(false);
    }
  };

  // mount par API call
  useEffect(() => {
    fetchTodos();
  }, []);

  // search filter
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: 400 }}>
      <h2>Todo List (Pro)</h2>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search todo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🔄 Loader */}
      {loading && <p>⏳ Loading...</p>}

      {/* ❌ Error + Retry */}
      {error && (
        <>
          <p>{error}</p>
          <button onClick={fetchTodos}>Retry</button>
        </>
      )}

      {/* ✅ List */}
      {!loading && !error && (
        <ul>
          {filteredTodos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoPro;
