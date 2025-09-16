# Personal Preference Dashboard

A React-based multi-page application that demonstrates advanced React Router concepts, custom hooks, and state management through a personalized theme and mood configuration system.

## 🎯 Project Overview

This Personal Preference Dashboard allows users to:
- Configure personal preferences (theme, mood, text size, greeting)
- Preview their customizations in real-time
- Navigate between Settings and Preview pages
- Experience live updates as preferences change

## 🏗️ Architecture

This project demonstrates key React Router concepts:

### ✅ Custom Hooks
- **`usePreferences()`**: Manages structured preference state using advanced state patterns
- Encapsulates complex state logic in reusable hook

### ✅ React Router Implementation  
- **BrowserRouter**: Full client-side routing
- **Outlet Context**: State sharing between route components
- **Nested Routes**: Professional route organization

### ✅ Multi-Page Navigation
- Settings page for preference configuration
- Preview page for live customization display
- Navigation with React Router Link components

## 🚀 How to Run

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [your-repo-url - private until submission]
   cd interactive_frontend_work_req_3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173` (Vite default port)
   - The app will automatically redirect to the Settings page

## 🎨 Features

### Settings Page
- **Theme Selection**: Light, Dark, or Colorful themes with instant visual feedback
- **Mood Configuration**: Cheerful, Calm, Energetic, or Cozy moods
- **Text Size Control**: Small, Medium, Large, or Extra Large with live preview
- **Custom Greeting**: Personalized welcome message input

### Preview Page
- **Live Theme Application**: See your theme choice applied immediately
- **Mood-Based Content**: Dynamic quotes and styling based on mood selection
- **Preference Summary**: Overview of all current settings in organized cards
- **Real-time Updates**: All changes from Settings page reflected instantly

## 🔧 Technical Implementation

### Custom Hook Architecture

```typescript
// usePreferences Hook - Structured State Management
function usePreferences() {
  const [preferences, setPreferences] = useState({
    theme: 'light',
    mood: 'cheerful',
    textSize: 'medium',
    greeting: 'Hello there!'
  });

  const updatePreference = (key, value) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return [preferences, updatePreference];
}
```

### React Router with Outlet Context

```typescript
// Layout Component - State Container
function Layout() {
  const [preferences, updatePreference] = usePreferences();
  
  return (
    <div className={`theme-${preferences.theme}`}>
      <Navigation />
      <main>
        <Outlet context={{ preferences, updatePreference }} />
      </main>
    </div>
  );
}

// Child Components - State Consumers
function SettingsPage() {
  const { preferences, updatePreference } = useOutletContext();
  // Component logic...
}
```

### Real-Time State Synchronization

- **Outlet Context**: Shares state between route components
- **Instant Updates**: No save buttons required - changes apply immediately
- **Navigation Persistence**: State maintained across route changes

## 📁 Project Structure

```
interactive_frontend_work_req_3/
├── src/
│   ├── components/
│   │   └── PreferenceDashboard.tsx    # Main component with routing & state
│   ├── App.tsx                        # App wrapper
│   ├── main.tsx                       # Vite entry point
│   └── index.css                      # Custom styles (no external frameworks)
├── index.html                         # Vite HTML template
├── package.json                       # Dependencies & scripts
├── vite.config.ts                     # Vite configuration
└── README.md                          # This file
```

## 🎓 Learning Concepts Demonstrated

### 1. **React Router Architecture**
- **BrowserRouter**: Client-side routing setup
- **Routes & Route**: Declarative route configuration  
- **Outlet Context**: Professional state sharing pattern
- **useOutletContext**: Hook-based context consumption

### 2. **Custom Hook Patterns**
- `usePreferences()` encapsulates complex state logic
- Follows React Hook rules and conventions
- Reusable across multiple components

### 3. **Component Communication**
- Parent-child state flow via Outlet context
- Centralized state management
- Real-time synchronization between components

### 4. **Professional UI Patterns**
- Custom CSS without external frameworks
- Responsive design principles
- Smooth transitions and visual feedback
- Accessible interaction patterns

## 🔄 Development Workflow

### Adding New Preferences

1. **Update the preference state structure** in `usePreferences()`
2. **Add UI controls** in `SettingsPage` component
3. **Apply preferences** in `PreviewPage` component
4. **Test live updates** between pages

### Adding New Pages

1. **Create new route component**
2. **Add Route** to the Routes configuration
3. **Update navigation** with new Link
4. **Access shared state** via `useOutletContext()`

## ✨ Key Features

- **🎨 Live Theme Switching**: Instant visual updates across the entire app
- **💭 Mood-Based Content**: Dynamic quotes and styling based on mood selection
- **📏 Accessibility**: Configurable text sizes for better readability
- **👋 Personalization**: Custom greeting messages
- **📱 Responsive Design**: Works seamlessly on all device sizes
- **🔄 State Persistence**: Preferences maintained during navigation
- **⚡ Fast Development**: Built with Vite for optimal developer experience

## 🚀 Technology Stack

- **React 18**: Modern React with hooks
- **React Router 7**: Latest routing capabilities with Outlet context
- **TypeScript**: Type-safe development
- **Vite**: Fast development and build tooling
- **Custom CSS**: No external styling frameworks
- **Modern JavaScript**: ES6+ features and patterns

## 🎓 Connection to React Router Learning

This project demonstrates mastery of:
- **Advanced State Management**: Custom hooks managing complex state objects
- **Route-Based Architecture**: Professional multi-page application structure  
- **Context Patterns**: Sharing state between route components
- **Component Organization**: Clean separation between layout, pages, and state logic

The implementation showcases how React Router enables building scalable, maintainable applications with proper state management and component communication patterns.

---

**Built with**: React, TypeScript, React Router, Vite, and custom CSS styling