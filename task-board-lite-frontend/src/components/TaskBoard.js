import { useEffect, useState, useCallback } from "react";
import api from "../api/api";
import TaskColumn from "./TaskColumn";
import TaskModal from "./TaskModal";

const statuses = ["TODO", "IN_PROGRESS", "DONE"];

export default function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);

  const loadTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const res = await api.get("", {
        params: {
          status: statusFilter || undefined,
          priority: priorityFilter || undefined
        }
      });

      setTasks(res.data);
    } catch (err) {
      setError("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  }, [statusFilter, priorityFilter]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Task Board</h1>

      {/* Filters */}
      <div style={{ display: "flex", gap: 10 }}>
        <select onChange={e => setStatusFilter(e.target.value)}>
          <option value="">All Status</option>
          <option value="TODO">TODO</option>
          <option value="IN_PROGRESS">IN_PROGRESS</option>
          <option value="DONE">DONE</option>
        </select>

        <select onChange={e => setPriorityFilter(e.target.value)}>
          <option value="">All Priority</option>
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>
        </select>

        <button onClick={() => setSelectedTask({})}>Create Task</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="board">
        {statuses.map(status => (
          <TaskColumn
            key={status}
            status={status}
            tasks={tasks.filter(t => t.status === status)}
            onSelect={setSelectedTask}
          />
        ))}
      </div>

      {selectedTask && (
        <TaskModal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onSaved={loadTasks}
        />
      )}
    </div>
  );
}
