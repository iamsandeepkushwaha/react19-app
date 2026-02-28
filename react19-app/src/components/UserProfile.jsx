import { use } from "react";

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Sandeep", role: "React Learner 🚀" });
    }, 2000);
  });
}

let userPromise = fetchUser();

function UserProfile() {
  const user = use(userPromise); // React 19 feature
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.role}</p>
    </div>
  );
}

export default UserProfile;