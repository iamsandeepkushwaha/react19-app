// ❤️ Task 2: Like Button using useOptimistic

// 👉 Pehle UI update, baad me API response
// 👉 User ko fast feel milta hai ⚡

import { useOptimistic } from "react";

function LikeButton() {
  const [likes, addOptimisticLike] = useOptimistic(
    10,
    (currentLikes) => currentLikes + 1
  );

  async function handleLike() {
    addOptimisticLike(); // UI instantly update

    await new Promise((res) => setTimeout(res, 1000)); // fake API delay
    console.log("Like saved on server");
  }

  return (
    <button onClick={handleLike}>
      ❤️ Like {likes}
    </button>
  );
}

export default LikeButton;

// 🔑 Samjho

// UI turant change

// Server slow ho sakta hai, user ko lagta hai app fast hai 😎




// import { useOptimistic } from "react";
// import App from "../App";

// function LikeButton() {
//   const [likes, addLike] = useOptimistic(
//     0,
//     (state) => state + 1
//   );

//   async function handleLike() {
//     addLike(); // UI instantly update
//     await fetch("/api/like");
//   }

//   return <button onClick={handleLike}>❤️ {likes}</button>;
// }

// export default LikeButton;

// // useOptimistic – Instant UI 🚀

// // Real-life example:

// // Like button

// // Comment add

// // Cart add

// // 👉 Server slow ❌
// // 👉 User happy ✅