function Filters({ onChange }) {

  const handleChange = (e) => {
    const { name, value } = e.target;

    onChange(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex gap-3">
      <select name="status" onChange={handleChange} className="border p-2 rounded">
        <option value="">All Status</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <select name="category" onChange={handleChange} className="border p-2 rounded">
        <option value="">All Category</option>
        <option value="Tax">Tax</option>
        <option value="Audit">Audit</option>
        <option value="Legal">Legal</option>
      </select>
    </div>
  );
}

export default Filters;