export default function TaskCard({ task, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <strong>{task.title}</strong>
      <p>Priority: {task.priority}</p>
      <p>Due: {task.dueDate || "N/A"}</p>
    </div>
  );
}
