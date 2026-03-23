import { useState, useEffect } from "react";
import ClientList from "./components/ClientList";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import Filters from "./components/Filters";

const API_BASE = "compliance-tracker-production-bb3e.up.railway.app";

function App() {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({ status: "", category: "" });

  useEffect(() => {
    fetch(`${API_BASE}/clients`)
      .then(res => res.json())
      .then(data => setClients(data));
  }, []);

  const fetchTasks = (clientId, filters = {}) => {
    let url = `${API_BASE}/tasks/client/${clientId}`;
    const params = [];

    if (filters.status) params.push(`status=${filters.status}`);
    if (filters.category) params.push(`category=${filters.category}`);

    if (params.length > 0) url += "?" + params.join("&");

    fetch(url)
      .then(res => res.json())
      .then(data => setTasks(data));
  };

  const handleClientSelect = (client) => {
    setSelectedClient(client);
    fetchTasks(client.id);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    fetchTasks(selectedClient.id, newFilters);
  };

  // 📊 Stats calculation
  const total = tasks.length;
  const pending = tasks.filter(t => t.status === "Pending").length;
  const overdue = tasks.filter(t => t.overdue).length;

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4 text-blue-600">Clients</h2>
        <ClientList clients={clients} onSelect={handleClientSelect} />
      </div>

      {/* Main Dashboard */}
      <div className="flex-1 p-6">

        {selectedClient ? (
          <>
            {/* Header */}
            <h1 className="text-2xl font-bold mb-6">
              {selectedClient.companyName}
            </h1>

            {/* 📊 Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-xl shadow">
                <p className="text-gray-500">Total Tasks</p>
                <h2 className="text-xl font-bold">{total}</h2>
              </div>

              <div className="bg-yellow-100 p-4 rounded-xl shadow">
                <p className="text-gray-600">Pending</p>
                <h2 className="text-xl font-bold">{pending}</h2>
              </div>

              <div className="bg-red-100 p-4 rounded-xl shadow">
                <p className="text-gray-600">Overdue</p>
                <h2 className="text-xl font-bold">{overdue}</h2>
              </div>
            </div>

            {/* Filters */}
            <div className="mb-4">
              <Filters onChange={handleFilterChange} />
            </div>

            {/* Add Task */}
            <AddTaskForm
              clientId={selectedClient.id}
              onTaskAdded={() => fetchTasks(selectedClient.id, filters)}
            />

            {/* Task List */}
            <TaskList
              tasks={tasks}
              onUpdate={() => fetchTasks(selectedClient.id, filters)}
            />
          </>
        ) : (
          <div className="text-center text-gray-500 mt-20">
            Select a client to view tasks
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
