import { useState } from "react";
import { useTasks } from "../TaskContext";

const AddTask = () => {
  const [text, setText] = useState(''); 
  const { addTask } = useTasks(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text); 
      setText(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="O que precisa ser feito?"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddTask;