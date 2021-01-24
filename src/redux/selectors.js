export const getItems = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getVisiblesContacts = state => {
  const allContacts = getItems(state);
  const filter = getFilter(state);
  const normalizeFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
};
