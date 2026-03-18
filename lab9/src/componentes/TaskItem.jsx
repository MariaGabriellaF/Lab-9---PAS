import { useTasks } from '../TaskContext';

const TaskItem = ({ task }) => {
  const { toggleTask } = useTasks(); 

  return (
    <li>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleTask(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
    </li>
  );
};

export default TaskItem;