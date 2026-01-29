import TaskCard from "./TaskCard";

export default function TaskColumn({ status, tasks, onSelect }) {
  return (
    <div className="column">
      <h3>{status.replace("_", " ")}</h3>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} onClick={() => onSelect(task)} />
      ))}
    </div>
  );
}
