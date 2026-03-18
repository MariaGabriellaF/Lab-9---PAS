import React from 'react';
import { TaskProvider } from './TaskContext'; 
import Header from './componentes/Header';
import AddTask from './componentes/AddTask';
import TaskList from './componentes/TaskList';

function App() {
  return (
    <TaskProvider>
      <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <Header />
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;