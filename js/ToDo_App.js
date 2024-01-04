import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasksList([...tasksList, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasksList.filter((_, i) => i !== index);
    setTasksList(updatedTasks);
  };

  return (
    <div className="App" style={{ fontSize: '18px' }}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ol>
        {tasksList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)} style={{margin : '10px'}}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
