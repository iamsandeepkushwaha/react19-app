// 🧩 PHASE 3: Global State Management (React 19)
// Phase Name: Global State Management
// 👉 Context API = global data without headache 😎

import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

// ===================================================
// 1️⃣ PROP DRILLING kya hota hai? 🤔
// ===================================================

// Jab data flow hota hai:
// App → A → B → C

// ❗ Problem:
// 👉 Data sirf C component ko chahiye
// 👉 Lekin A aur B ko bina kaam ke props pass karne padte hain 😵

// 🔴 Example (Prop Drilling):
// <A user={user}>
//   <B user={user}>
//     <C user={user} />
//   </B>
// </A>

// 👉 Is problem ko bolte hain: PROP DRILLING ❌

// ===================================================
// 4️⃣ Context API ke 3 IMPORTANT PARTS 🔥
// ===================================================

// 1️⃣ createContext()
// 👉 Context create karta hai (global data container)

// 2️⃣ Provider
// 👉 Data provide karta hai poori component tree ko

// 3️⃣ useContext()
// 👉 Kisi bhi component me data consume karne ke liye


// ===================================================
// 🧠 One-liner (Interview Ready)
// ===================================================

// "Context API helps avoid prop drilling by providing
// global state accessible to any component directly."
