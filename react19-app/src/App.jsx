import Counter from "./components/Counter"
import Profile from "./components/Profile"
import InputExample from "./components/InputExample"
import User from "./components/User"
import Todo from "./components/Todo"

function App() {
  return (<>
  <Counter/>
  <Profile/> {/* Multiple State Example */}
  <InputExample/> {/* State with Input (Controlled Component 🔥) */}
  
  {/* State with Object */}
  <User/>

  {/* State with Array */}
  <Todo/>
  </>)
}

export default App;

// state → current value
// setState → value update karne ka function

// setCount(prev => prev + 1);
// 👉 Jab previous value pe depend ho — yeh best practice hai.