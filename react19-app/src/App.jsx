import User from "./components/User"
import Button from "./components/Button"
import Product from "./components/Product"
import Student from "./components/Student"

function App() {
  function handleClick() {
    alert("Button clicked from Child!");
  }

  function Card({ children }) {
    return <div className="card">{children}</div>;
  }

  return (
    <div>
    <User name="Sandeep" age={24} />

    {/* Props ke Types (kya-kya bhej sakte ho) */}
    {/* <User
    name="Rahul"          // string
    age={22}              // number
    isStudent={true}      // boolean
    skills={["JS", "React"]} // array
    /> */}

    <Button onClick={handleClick} />

    <Card>
      <h2>Hello</h2>
      <p>This is inside card</p>
    </Card>

    <Product title="Laptop" price={55000} />
    <Product title="Mobile" price={20000} />
    {/* 👉 Ek component, multiple products 💥 */}
    <Student name='Sandeep' course='BCA'/>
    <Button onClick={handleClick} />

    </div>
  );
}

export default App;
