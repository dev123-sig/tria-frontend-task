import { createContext, useContext, useState, useEffect } from 'react';
import { mockContacts } from '../data/mockData';

const ContactContext = createContext();

export const useContacts = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContacts must be used within a ContactProvider');
  }
  return context;
};

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate API call to fetch contacts
  useEffect(() => {
    const fetchContacts = async () => {
      setIsLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      setContacts(mockContacts);
      setFilteredContacts(mockContacts);
      setIsLoading(false);
    };

    fetchContacts();
  }, []);

  // Filter contacts based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredContacts(contacts);
    } else {
      const filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredContacts(filtered);
    }
  }, [searchQuery, contacts]);

  const addContact = (newContact) => {
    const contactWithId = {
      ...newContact,
      id: Date.now(), // Simple ID generation
      createdAt: new Date().toISOString()
    };
    setContacts(prev => [contactWithId, ...prev]);
  };

  const deleteContact = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const updateContact = (id, updatedData) => {
    setContacts(prev =>
      prev.map(contact =>
        contact.id === id ? { ...contact, ...updatedData } : contact
      )
    );
  };

  const value = {
    contacts,
    filteredContacts,
    searchQuery,
    setSearchQuery,
    addContact,
    deleteContact,
    updateContact,
    isLoading
  };

  return (
    <ContactContext.Provider value={value}>
      {children}
    </ContactContext.Provider>
  );
};
