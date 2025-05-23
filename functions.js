// Converts an array of clients to an HTML string of list items.
const list = (clients) => {
    return clients.map(client =>
      `<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name}
        <strong>$ ${client.balance.toFixed(2)}</strong>
      </li>`
    ).join('');
  };
  
  // Sorts an array of clients by a specified property.
  const order = (clients, property) => {
    const sortedClients = [...clients]; // Clone array to avoid mutating the original
    sortedClients.sort((a, b) => {
      if (a[property] < b[property]) {
        return -1;
      }
      if (a[property] > b[property]) {
        return 1;
      }
      return 0;
    });
    return sortedClients;
  };
  
  // Calculates the total balance for all clients.
  const total = (clients) => {
    return clients.reduce((accumulator, client) => accumulator + client.balance, 0);
  };
  
  // Finds a client by their index.
  // Assume clients array is globally available.
  const info = (index) => {
    // Assumes 'clients' is a globally accessible array
    return clients.find(client => client.index === index);
  };
  
  // Searches for clients by name (case-insensitive).
  // Assumes 'clients' array is globally available.
  const search = (query) => {
    // Assumes 'clients' is a globally accessible array
    const lowerCaseQuery = query.toLowerCase();
    return clients.filter(client => client.name.toLowerCase().includes(lowerCaseQuery));
  };