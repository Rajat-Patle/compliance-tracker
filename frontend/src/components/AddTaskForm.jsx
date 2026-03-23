import { useState } from "react";

function AddTaskForm({ clientId, onTaskAdded }) {
  const [form, setForm] = useState({
    title: "",
    category: "",
    dueDate: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/tasks/client/${clientId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...form,
        status: "Pending",
        priority: "Medium"
      })
    }).then(() => {
      onTaskAdded();
      setForm({ title: "", category: "", dueDate: "" });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4 flex gap-2">
      <input
        className="border p-2 rounded w-full"
        placeholder="Title"
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
      />

      <input
        className="border p-2 rounded"
        placeholder="Category"
        onChange={e => setForm({ ...form, category: e.target.value })}
      />

      <input
        type="date"
        className="border p-2 rounded"
        onChange={e => setForm({ ...form, dueDate: e.target.value })}
      />

      <button className="bg-blue-500 text-white px-4 rounded">
        Add
      </button>
    </form>
  );
}

export default AddTaskForm;