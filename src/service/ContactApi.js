const STORAGE_KEY = "contacts";

export const getContacts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      resolve(data);
    }, 500);
  });
};

export const addContact = async (contact) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const existing =
        JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

      const updated = [
        ...existing,
        { ...contact, id: crypto.randomUUID(), createdAt: new Date() },
      ];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      resolve(updated);
    }, 500);
  });
};

export const deleteContact = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data =
        JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

      const updated = data.filter((c) => c.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      resolve(updated);
    }, 500);
  });
};



export const updateContact = async (updatedContact) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  const updated = data.map((c) =>
    c.id === updatedContact.id ? updatedContact : c
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};





