import React, { useState } from "react";
import "./App.css";

function App() {

const [tasks, setTasks] = useState([]);

//Fonction Add un task
const addTask = (event) => {
  event.preventDefault();

  if (!tasks.text || /^\s*$/.test(tasks.text)) {
    return;
  }
  setTasks([...tasks, { id: Math.random(), title: tasks, check: false }]);
  
};

//Fonction  delete un task
const removeTask = ({ id }) => {
  setTasks(tasks.filter((task) => task.id !== id));
}

    const updateTask = (task_id, newTitle) => {
      
      if (!tasks.text || /^\s*$/.test(tasks.text)) {
        return;
      }

      const newTask = tasks.map((element) => {
        if(element.id === task_id) element.title = newTitle;
        return element;
      })
      setTasks(newTask);
    }

    return (
      <div className="App">
        
      </div>
      )
}

    



export default App;

