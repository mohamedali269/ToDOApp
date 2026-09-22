import "./TaskItem.css";

function TaskItem({ task, handleToggleTaskCompleted, handleDeletTask }) {
  return (
    <div className="task-item">
      <button
        className="check-btn"
        onClick={() => {
          handleToggleTaskCompleted(task.id);
        }}
      >
        {task.completed ? "✔" : ""}
      </button>

      <span
        className="task-content"
        style={task.completed ? { textDecoration: "line-through" } : {}}
      >
        {task.content}
      </span>

      <button className="delete-btn" onClick={() => handleDeletTask(task.id)}>
        ✕
      </button>
    </div>
  );
}

export default TaskItem;
