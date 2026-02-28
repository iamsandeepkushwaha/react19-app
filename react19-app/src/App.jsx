import { Suspense } from "react";

import Form from "./components/Form";
import LikeButton from "./components/LikeButton";
import ErrorBoundary from "./components/ErrorBoundary";
import LoginForm from "./components/LoginForm";
import UserProfile from "./components/UserProfile";

function App() {

  return (
    <>
      {/* Server / Action Form */}
      <Form />

      {/* Suspense handles loading */}
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* ErrorBoundary handles crashes */}
        <ErrorBoundary>
          <LikeButton />
        </ErrorBoundary>
      </Suspense>

      <LoginForm/>
      <Suspense fallback={<h2>Loading user data...</h2>}>
      <UserProfile/>
      </Suspense>
    </>
  );
}

export default App;


// 🔑 Samjho
// Suspense = waiting room 🛋️
// fallback = loader UI
// API load hone ke baad real component render


// import { useActionState } from "react";

// function App() {
//   async function saveData(formData) {
//     "use server";

//     const name = formData.get("name");
//     console.log(name);
//   }
//   return (
//     <form action={saveData}>
//       <input name="name" />
//       <button>Save</button>
//     </form>
//   );
// }

// export default App;