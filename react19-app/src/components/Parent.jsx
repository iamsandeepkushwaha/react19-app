import React, { useCallback, useState } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("❌ Child re-rendered");
  return <button onClick={onClick}>Child Button</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  console.log("Parent rendered");

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Parent +</button>
      <Child onClick={handleClick} />
    </>
  );
}

export default Parent;
