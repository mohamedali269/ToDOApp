import { useState } from "react";
import "./AddTask.css";

function AddTask({ setTasks }) {
  const [content, setContent] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (content.trim() === "") return;
    const newTask = {
      id: Date.now(),
      content: content,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setContent("");
  };

  const onChangeAddInput = (e) => {
    setContent(e.target.value);
  };

  return (
    <form className="AddTask_form" onSubmit={onSubmitForm}>
      <input
        type="text"
        id="todo-input"
        placeholder="write new task"
        required
        autoComplete="off"
        onChange={onChangeAddInput}
        value={content}
        autoFocus
      />
      <button>Add Task</button>
    </form>
  );
}

export default AddTask;
