function TaskList({ tasks, onUpdate }) {

  const updateStatus = (id) => {
    fetch(`http://localhost:8080/tasks/${id}/status?status=Completed`, {
      method: "PUT"
    }).then(() => onUpdate());
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tasks.map(task => (
        <div
          key={task.id}
          className={`p-4 rounded-xl shadow border 
          ${task.overdue ? "bg-red-50 border-red-400" : "bg-white"}`}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">{task.title}</h3>

            <span className={`px-2 py-1 text-xs rounded 
              ${task.status === "Completed" ? "bg-green-200" : "bg-yellow-200"}`}>
              {task.status}
            </span>
          </div>

          <p className="text-sm text-gray-500">{task.category}</p>

          <p className="text-sm mt-2">
            Due: <span className="font-medium">{task.dueDate}</span>
          </p>

          {task.overdue && (
            <p className="text-red-500 text-sm font-semibold mt-1">
              ⚠ Overdue
            </p>
          )}

          {task.status !== "Completed" && (
            <button
              onClick={() => updateStatus(task.id)}
              className="mt-3 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
            >
              Mark Completed
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;