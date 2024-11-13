import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText) {
      setTasks((prevTasks) => [...prevTasks, { text: taskText, completed: false }]);
    }
  };

  const toggleTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t))
    );
  };

  const editTask = (index, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((t, i) => (i === index ? { ...t, text: newText } : t))
    );
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
