import { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (title) =>{
        const newTask = {id: Date.now(), title, completed:false };
        setTasks([...tasks, newTask]);
    }

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, completed: !task.completed} : task
        ));
    }

    return(
        <TaskContext.Provider value = {{ tasks, addTask, toggleTask}}>
            {children}
            </TaskContext.Provider>
    );
    
};
export const useTasks = () => useContext(TaskContext);