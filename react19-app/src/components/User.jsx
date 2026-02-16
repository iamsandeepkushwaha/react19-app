import { useState } from "react";

function User() {
  const [user, setUser] = useState({
    name: "Rahul",
    city: "Delhi"
  });

  return (
    <>
      <h3>{user.name} - {user.city}</h3>
      <button
        onClick={() =>
          setUser({ ...user, city: "Mumbai" })
        }
      >
        Change City
      </button>
    </>
  );
}

export default User;

// State with Object