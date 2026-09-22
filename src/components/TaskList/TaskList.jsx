import TaskItem from "../TaskItem/TaskItem.jsx";
import "./TaskList.css";

export default function TaskList({
  tasks,
  handleToggleTaskCompleted,
  handleDeletTask,
}) {
  const listOfTasks = tasks.map((task) => {
    return (
      <TaskItem
        key={task.id}
        task={task}
        handleToggleTaskCompleted={handleToggleTaskCompleted}
        handleDeletTask={handleDeletTask}
      />
    );
  });
  return <div className="task-list">{listOfTasks}</div>;
}
