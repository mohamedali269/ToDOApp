import styles from "../Controls/Controls.module.css";

export default function Controls({ tasks, handleDeletCompleted, setFilter,currentFilter }) {
  return (
    <div className={styles.control}>
      <span className={styles.counter}>{tasks.length} item</span>
      <div className={styles.filter}>
        <button
        className={currentFilter === "all" ? styles.active : ""}
          onClick={() => {
            setFilter("all");
          }}
        >
          All
        </button>
        <button
        className={currentFilter === "active" ? styles.active : ""}
          onClick={() => {
            setFilter("active");
          }}
        >
          Active
        </button>
        <button
        className={currentFilter === "completed" ? styles.active : ""}
          onClick={() => {
            setFilter("completed");
          }}
        >
          Completed
        </button>
      </div>
      <button className={styles.delete} onClick={handleDeletCompleted}>
        Delete Completed
      </button>
    </div>
  );
}
