import './App.css';
import React, { useEffect, useState } from "react";
import Footer from './components/Footer';
import Header from './components/Header';
import Task from './components/Task';
import { initial } from './components/initialTasks';

function App() {

  const [tasks, setTasks] = useState(initial);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
    if (localStorage.getItem('tasks')) {
      const local_task = JSON.parse(localStorage.getItem('tasks'));
      setTasks(local_task);
    }
  }, [])

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, [tasks, isMounted]);

  //Fonction Add un task
  const addTask = (tache) => {
    if (tache.trim() !== "") {
      setTasks([{ id: Math.floor(Math.random() * 5000), title: tache, check: false }, ...tasks]);
    }
  };

  //Fonction  delete un task

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Fonction delete all
  const removeAllTask = () => {
    setTasks(tasks.filter((task) => !task.check));
  };

  //Fonction checked
  const checkTask = (id) => {
    setTasks(tasks.map((task) => {
      (task.id === id) && (task.check = !task.check);
      return task
    }));
  };

  //Fonction delete all
  const checkAllTask = () => {
    setTasks(tasks.map((task) => { task.check = true; return task }));
  };

  const updateTask = (task_id, newTitle) => {
    const newTask = tasks.map((element) => {
      if (element.id === task_id) element.title = newTitle;
      return element;
    })
    setTasks(newTask);
  }
  return (
    <div className="App">

      <Header checkAll={checkAllTask} deleteAll={removeAllTask} />

      <ul className='tasks'>
        {
          tasks.map((task) => (<Task task={task} check={checkTask} del={removeTask} update={updateTask} key={task.id} />))
        }
      </ul>

      <Footer addTask={addTask} />

    </div>
  );
}

export default App;
