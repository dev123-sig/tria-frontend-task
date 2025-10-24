import { useState } from 'react';
import { useContacts } from '../context/ContactContext';
import ContactCard from './ContactCard';
import SearchBar from './SearchBar';
import AddContactForm from './AddContactForm';
import './ContactList.css';

const ContactList = () => {
  const { filteredContacts, searchQuery, isLoading } = useContacts();
  const [showAddForm, setShowAddForm] = useState(false);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p className="loading-text">Loading contacts...</p>
      </div>
    );
  }

  return (
    <div className="contact-list-container">
      <div className="contact-list-header">
        <div className="header-content">
          <h1 className="header-title">My Contacts</h1>
          <p className="header-subtitle">
            Manage your contacts easily in one place
          </p>
        </div>
        <button 
          className="add-contact-button"
          onClick={() => setShowAddForm(true)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add Contact
        </button>
      </div>

      <SearchBar />

      {filteredContacts.length === 0 ? (
        <div className="empty-state">
          <svg 
            className="empty-icon" 
            width="64" 
            height="64" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <h3 className="empty-title">
            {searchQuery ? 'No contacts found' : 'No contacts yet'}
          </h3>
          <p className="empty-description">
            {searchQuery 
              ? `No contacts match "${searchQuery}". Try a different search term.`
              : 'Start by adding your first contact to get organized.'
            }
          </p>
          {!searchQuery && (
            <button 
              className="empty-action-button"
              onClick={() => setShowAddForm(true)}
            >
              Add Your First Contact
            </button>
          )}
        </div>
      ) : (
        <>
          <div className="contacts-count">
            Showing {filteredContacts.length} {filteredContacts.length === 1 ? 'contact' : 'contacts'}
            {searchQuery && ` for "${searchQuery}"`}
          </div>
          <div className="contact-grid">
            {filteredContacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        </>
      )}

      {showAddForm && (
        <AddContactForm onClose={() => setShowAddForm(false)} />
      )}
    </div>
  );
};

export default ContactList;
