import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  //Fonction Add un task
  const addTask = (tache) => {
    if (tache.trim() !== "") {
      setTasks([...tasks, { id: Math.random(), title: tache, check: false }]);
    }
  };

  //Fonction  delete un task

  const removeTask = ({ id }) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Fonction delete all
  const removeAllTask = (check) => {
    setTasks(tasks.filter((task) => task.check !== false));
  };

  //Fonction checked

  return <div className="App"></div>;
}

export default App;
