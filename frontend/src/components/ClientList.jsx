function ClientList({ clients, onSelect }) {
  return (
    <div>
      {clients.map(client => (
        <div
          key={client.id}
          onClick={() => onSelect(client)}
          className="p-3 rounded-lg hover:bg-blue-100 cursor-pointer mb-2 transition"
        >
          {client.companyName}
        </div>
      ))}
    </div>
  );
}

export default ClientList;