import TaskItem from './TaskItem';
import { motion } from 'framer-motion';

function TaskList({ tasks, toggleTask, editTask, deleteTask }) {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {tasks.map((task, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <TaskItem
            task={task}
            toggleTask={() => toggleTask(index)}
            editTask={(newText) => editTask(index, newText)}
            deleteTask={() => deleteTask(index)}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default TaskList;
