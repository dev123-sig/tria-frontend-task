import { useState } from 'react';
import { useContacts } from '../context/ContactContext';
import './ContactCard.css';

const ContactCard = ({ contact }) => {
  const { deleteContact } = useContacts();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDelete = () => {
    deleteContact(contact.id);
    setShowDeleteConfirm(false);
  };

  return (
    <div className="contact-card">
      <div className="contact-avatar-section">
        <img 
          src={contact.avatar} 
          alt={`${contact.name} avatar`}
          className="contact-avatar"
        />
      </div>
      
      <div className="contact-info">
        <h3 className="contact-name">{contact.name}</h3>
        {contact.company && (
          <p className="contact-company">{contact.company}</p>
        )}
        
        <div className="contact-details">
          <div className="contact-detail-item">
            <svg className="detail-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <a href={`mailto:${contact.email}`} className="contact-link">
              {contact.email}
            </a>
          </div>
          
          <div className="contact-detail-item">
            <svg className="detail-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <a href={`tel:${contact.phone}`} className="contact-link">
              {contact.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="contact-actions">
        {!showDeleteConfirm ? (
          <button 
            className="delete-button"
            onClick={() => setShowDeleteConfirm(true)}
            aria-label={`Delete ${contact.name}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        ) : (
          <div className="delete-confirm">
            <button 
              className="confirm-button cancel"
              onClick={() => setShowDeleteConfirm(false)}
            >
              Cancel
            </button>
            <button 
              className="confirm-button delete"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
