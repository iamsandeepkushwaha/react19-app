import { useState, useEffect } from "react";

function TitleChange() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Increase
    </button>
  );
}

export default TitleChange

// Real Example – Document Title Change