import { useState } from "react";

function InputExample() {
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </>
  );
}

export default InputExample

// State with Input (Controlled Component 🔥)
// 👉 Input ka control React ke paas = Controlled Component