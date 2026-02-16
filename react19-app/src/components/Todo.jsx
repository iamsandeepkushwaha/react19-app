import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState(["Learn React"]);

  function addTask() {
    setTasks([...tasks, "Practice useState"]);
  }

  return (
    <>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button onClick={addTask}>Add Task</button>
    </>
  );
}

export default Todo

// State with Array