import { ContactProvider } from './context/ContactContext';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  return (
    <ContactProvider>
      <div className="app">
        <ContactList />
      </div>
    </ContactProvider>
  );
}

export default App;
