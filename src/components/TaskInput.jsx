import { useState, useRef } from 'react';

function TaskInput({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const inputRef = useRef(null); // Create a reference to the input

  const handleAddTask = () => {
    addTask(taskText);
    setTaskText('');
    inputRef.current.focus(); // Keep focus on the input after adding a task
  };

  return (
    <div style={{ display: 'flex', marginBottom: '20px' }}>
      <input
        ref={inputRef}
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;
