import Header from "./components/Header/Header.jsx";
import AddTask from "./components/AddTask/AddTask.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";
import Controls from "./components/Controls/Controls.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(() => {
    const saveTheme = localStorage.getItem("theme");
    return saveTheme ? JSON.parse(saveTheme) : "light";
  });
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("my_tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  useEffect(() => {
    localStorage.setItem("my_tasks", JSON.stringify(tasks));
  }, [tasks]);
  const handleToggleTaskCompleted = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDeletTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleDeletCompleted = () => {
    setTasks((prev) => prev.filter((task) => task.completed === false));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="app">
      <Header theme={theme} setTheme={setTheme} />
      <AddTask setTasks={setTasks} />
      <TaskList
        tasks={filteredTasks}
        handleToggleTaskCompleted={handleToggleTaskCompleted}
        handleDeletTask={handleDeletTask}
      />
      <Controls
        tasks={tasks}
        handleDeletCompleted={handleDeletCompleted}
        currentFilter={filter}
        setFilter={setFilter}
      />
      <Footer/>
    </div>
  );
}

export default App;
