import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState();
  const [tasks, setTasks] = useState([]);

  //Fonction Add un task
  const addTask = (event) => {
    event.preventDefault();
    setTasks([...tasks, { id: Math.random(), title: input }]);
    setInput("");
  };

  //Fonction  delete un task
  const removeTask = ({ id }) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
 

  return <div className="App"></div>;
}

export default App;
