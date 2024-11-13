import { useState, useRef } from 'react';

function TaskItem({ task, toggleTask, editTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const inputRef = useRef(null); // Create a reference for the edit input

  const handleEdit = () => {
    setIsEditing(true);
    setNewText(task.text);
    setTimeout(() => {
      inputRef.current.focus(); // Focus on the input after opening edit
    }, 0);
  };

  const handleSave = () => {
    editTask(newText);
    setIsEditing(false);
  };

  return (
    <li className="task-item">
      {isEditing ? (
        <>
          <input
            ref={inputRef}
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={deleteTask}>Delete</button>
        </>
      ) : (
        <>
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={toggleTask}
          >
            {task.text}
          </span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={deleteTask}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
