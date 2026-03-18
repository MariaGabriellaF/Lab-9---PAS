import { useTasks } from "../TaskContext";

const Header = () =>{
    const {tasks} = useTasks();
    
    const total = tasks.length; 
    const completed = tasks.filter(t => t.completed).length;

    return (
        <header style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
            <h1>Minhas tarefas</h1>
            <p>Total: {total}</p>
            <p>Finalizadas: {completed}</p>
        </header>
    )
}
export default Header;