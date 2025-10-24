# Quick Start Guide

## Getting Started in 3 Steps

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Run Development Server
```bash
npm run dev
```

### 3️⃣ Open in Browser
Navigate to: `http://localhost:5173`

That's it! 🎉

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Quick Feature Overview

### View Contacts
- The main page displays all contacts in a grid layout
- Each contact card shows avatar, name, company, email, and phone

### Search Contacts
- Use the search bar at the top
- Search is real-time and case-insensitive
- Matches partial names

### Add New Contact
1. Click the "Add Contact" button
2. Fill in the form:
   - Name (required)
   - Email (required, validated)
   - Phone (required)
   - Company (optional)
3. Click "Add Contact" to save

### Delete Contact
1. Click the trash icon on any contact card
2. Confirm deletion

## Tech Highlights

✅ Built with React 18 and Vite
✅ Context API for state management
✅ Fully responsive design
✅ Form validation
✅ Loading states
✅ Empty states
✅ Smooth animations
✅ Accessibility features

## Project Structure at a Glance

```
src/
├── components/     # React components
├── context/        # Context API for state
├── data/           # Mock data
├── App.jsx         # Main app component
└── index.css       # Global styles
```

## Need Help?

- Check the main [README.md](README.md) for detailed documentation
- See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment instructions
- Review the code comments in each file

## Next Steps

1. **Customize**: Modify colors, fonts, and styling in CSS files
2. **Extend**: Add new features like edit, categories, or export
3. **Deploy**: Follow DEPLOYMENT.md to deploy to Vercel
4. **Integrate**: Connect to a real backend API

Happy Coding! 🚀
