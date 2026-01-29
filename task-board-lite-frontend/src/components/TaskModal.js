import { useState } from "react";
import api from "../api/api";

export default function TaskModal({ task, onClose, onSaved }) {
  const [form, setForm] = useState({
    title: task.title || "",
    description: task.description || "",
    priority: task.priority || "MEDIUM",
    status: task.status || "TODO",
    dueDate: task.dueDate || ""
  });

  const saveTask = async () => {
    if (!form.title.trim()) {
      alert("Title is required");
      return;
    }

    try {
      if (task.id) {
        await api.put(`/${task.id}`, form);
      } else {
        await api.post("", form);
      }
      onSaved();
      onClose();
    } catch {
      alert("Failed to save task");
    }
  };

  const deleteTask = async () => {
    if (!window.confirm("Delete this task?")) return;
    await api.delete(`/${task.id}`);
    onSaved();
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{task.id ? "Edit Task" : "Create Task"}</h3>

        <input
          placeholder="Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />

        <select
          value={form.priority}
          onChange={e => setForm({ ...form, priority: e.target.value })}
        >
          <option>LOW</option>
          <option>MEDIUM</option>
          <option>HIGH</option>
        </select>

        <select
          value={form.status}
          onChange={e => setForm({ ...form, status: e.target.value })}
        >
          <option>TODO</option>
          <option>IN_PROGRESS</option>
          <option>DONE</option>
        </select>

        <input
          type="date"
          value={form.dueDate}
          onChange={e => setForm({ ...form, dueDate: e.target.value })}
        />

        <div style={{ marginTop: 10 }}>
          <button onClick={saveTask}>Save</button>
          {task.id && (
            <button onClick={deleteTask} style={{ marginLeft: 10 }}>
              Delete
            </button>
          )}
          <button onClick={onClose} style={{ marginLeft: 10 }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
