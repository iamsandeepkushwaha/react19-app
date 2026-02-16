import { useState } from "react";

function Profile() {
  const [name, setName] = useState("Sandeep");
  const [age, setAge] = useState(24);

  return (
    <div>
      <h2>{name} - {age}</h2>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
}

export default Profile

// Multiple State Example