# Contact List Application

A modern, responsive contact management application built with React, featuring a clean UI and intuitive user experience.

## 🚀 Live Demo

**Deployed Application:** [https://tria-frontend-task-two.vercel.app/](https://tria-frontend-task-two.vercel.app/)

## ✨ Features

### Core Features
- **📋 View Contacts**: Display all contacts in a clean, organized grid layout
- **🔍 Search Functionality**: Real-time search to filter contacts by name
- **➕ Add New Contacts**: Intuitive form to add new contacts with validation
- **🗑️ Delete Contacts**: Remove contacts with confirmation dialog
- **📱 Responsive Design**: Fully responsive layout that works on all devices

### Additional Features
- **⚡ Loading States**: Smooth loading animation while fetching data
- **🎨 Modern UI**: Beautiful gradient background with card-based design
- **♿ Accessibility**: Proper ARIA labels and keyboard navigation support
- **🔄 Real-time Updates**: Instant UI updates when adding/removing contacts
- **✅ Form Validation**: Client-side validation for email and required fields
- **🎯 Empty States**: Clear messaging when no contacts or search results
- **🖼️ Avatar Generation**: Automatic avatar generation using DiceBear API
- **💫 Smooth Animations**: CSS transitions and animations for better UX

## 🛠️ Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Lightning-fast build tool and dev server
- **Context API**: State management solution
- **CSS3**: Modern CSS with flexbox and grid
- **DiceBear API**: Avatar generation service

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd contact-list-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
contact-list-app/
├── src/
│   ├── components/
│   │   ├── ContactList.jsx       # Main container component
│   │   ├── ContactList.css
│   │   ├── ContactCard.jsx       # Individual contact card
│   │   ├── ContactCard.css
│   │   ├── SearchBar.jsx         # Search input component
│   │   ├── SearchBar.css
│   │   ├── AddContactForm.jsx    # Modal form for adding contacts
│   │   └── AddContactForm.css
│   ├── context/
│   │   └── ContactContext.jsx    # Global state management
│   ├── data/
│   │   └── mockData.js           # Mock contact data
│   ├── App.jsx                   # Root component
│   ├── App.css
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Design Decisions

### State Management
- **Context API**: For this application's scope, Context API provides sufficient state management. It's simpler to set up and maintain for managing contacts, search queries, and UI states.

### Component Architecture
- **Separation of Concerns**: Each component has a single responsibility
- **Reusable Components**: Components like ContactCard can be easily reused
- **Container/Presentational Pattern**: ContactList acts as a container, managing state and passing props down

### UX Enhancements
- **Loading States**: Simulated API call with loading spinner provides realistic user experience
- **Empty States**: Clear messaging when no data is available
- **Inline Validation**: Real-time form validation for better user feedback
- **Confirmation Dialogs**: Delete confirmation prevents accidental deletions
- **Responsive Design**: Mobile-first approach ensures usability on all devices

### Styling Approach
- **CSS Modules Pattern**: Each component has its own CSS file for maintainability
- **No CSS Framework**: Custom CSS allows for complete design control and smaller bundle size
- **Modern CSS Features**: Utilizes Grid, Flexbox, and CSS transitions

## 🔧 API Integration

Currently, the application uses mock data stored in `src/data/mockData.js`. To integrate with a real API:

1. Update `ContactContext.jsx` to replace the simulated fetch with actual API calls:
   ```javascript
   // Example:
   const response = await fetch('https://your-api.com/contacts');
   const data = await response.json();
   setContacts(data);
   ```

2. Implement error handling for network failures
3. Add loading states for all async operations

## 📝 Assumptions

1. **Data Structure**: Contacts include name, email, phone, company, and avatar
2. **Search**: Search is case-insensitive and matches partial names
3. **Persistence**: Data is not persisted; it resets on page reload (in-memory storage)
4. **Authentication**: No authentication or user management implemented
5. **Contact Uniqueness**: No duplicate detection implemented
6. **Phone Validation**: Basic phone format accepted (can be enhanced)

## 🚀 Deployment to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Update README**
   - Add your deployment URL to the "Live Demo" section

## 🔮 Future Enhancements

- [ ] Edit contact functionality
- [ ] Contact categories/tags
- [ ] Export contacts to CSV
- [ ] Import contacts from file
- [ ] Contact sorting options
- [ ] Advanced search filters
- [ ] Dark mode support
- [ ] Backend integration with database
- [ ] User authentication
- [ ] Contact sharing functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Devanshu Pathak

---

Built with ❤️ using React and Vite

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
