import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import ProgressTracker from "./Components/ProgressTracker";
import { useEffect, useState} from "react";


export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem
    ("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...task,task]);
  }

  return (
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly TaskManager</p>
      <TaskForm addTask = {addTask}/>
      <TaskList />
      <ProgressTracker />
      <button>Clear all tasks</button>
    </div>
  )
}

