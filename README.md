# Personal Preference Dashboard

A React-based multi-page application that demonstrates advanced React Router concepts, custom hooks, and state management through a personalized theme and mood configuration system.

## Project Overview

This Personal Preference Dashboard allows users to:

- Configure personal preferences (theme, mood, text size, greeting)
- Preview their customizations in real-time
- Navigate between Settings and Preview pages
- Experience live updates as preferences change

## Architecture & Learning Objectives

This project demonstrates key React Router concepts:

### Custom Hooks
- **usePreferences()**: Manages structured preference state using advanced state patterns
- Encapsulates complex state logic in reusable hook

### React Router Implementation  
- **BrowserRouter**: Full client-side routing
- **Outlet Context**: State sharing between route components
- **Nested Routes**: Professional route organization

### Multi-Page Navigation
- Settings page for preference configuration
- Preview page for live customization display
- Navigation with React Router NavLink components

## How to Run

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

## Features

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

## Technical Implementation

### Custom Hook Architecture

```typescript
// Clean type definitions (src/types/preferences.ts)
interface Preferences {
  theme: 'light' | 'dark' | 'colorful';
  mood: 'cheerful' | 'calm' | 'energetic' | 'cozy';
  textSize: 'small' | 'medium' | 'large' | 'xlarge';
  greeting: string;
}

// Focused custom hook (src/hooks/usePreferences.ts)
export function usePreferences(): [Preferences, (key: keyof Preferences, value: string) => void] {
  const [preferences, setPreferences] = useState<Preferences>({
    theme: 'light',
    mood: 'cheerful',
    textSize: 'medium',
    greeting: 'Hello there!'
  });

  const updatePreference = (key: keyof Preferences, value: string) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  return [preferences, updatePreference];
}
```

### React Router with Clean Architecture

```typescript
// Main routing setup (src/components/PreferenceDashboard.tsx)
export function PreferenceDashboard() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/settings" replace />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="preview" element={<PreviewPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

// Layout with state management (src/components/Layout.tsx)
export function Layout() {
  const [preferences, updatePreference] = usePreferences();
  
  return (
    <div className={`theme-${preferences.theme}`}>
      <Navigation />
      <main className="main-content">
        <Outlet context={{ preferences, updatePreference }} />
      </main>
    </div>
  );
}

// Clean component consumption (src/components/SettingsPage.tsx)
export function SettingsPage() {
  const { preferences, updatePreference } = useOutletContext<OutletContext>();
  // Focused settings UI logic...
}
```

### Real-Time State Synchronization

- **Outlet Context**: Shares state between route components
- **Instant Updates**: No save buttons required - changes apply immediately
- **Navigation Persistence**: State maintained across route changes

## Project Structure

```
interactive_frontend_work_req_3/
├── src/
│   ├── types/
│   │   └── preferences.ts               # TypeScript type definitions
│   ├── hooks/
│   │   └── usePreferences.ts            # Custom preference state hook
│   ├── constants/
│   │   └── moodContent.ts               # Static mood data and configurations
│   ├── components/
│   │   ├── PreferenceDashboard.tsx      # Main router component
│   │   ├── Layout.tsx                   # App layout with state management
│   │   ├── Navigation.tsx               # Navigation component
│   │   ├── SettingsPage.tsx             # Settings configuration UI 
│   │   └── PreviewPage.tsx              # Live preview display
│   ├── App.tsx                          # App wrapper
│   ├── App.css                          # App-specific styles
│   ├── main.tsx                         # Vite entry point
│   ├── index.css                        # Global styles
│   └── vite-env.d.ts                    # Vite TypeScript declarations
├── index.html                           # Vite HTML template
├── package.json                         # Dependencies & scripts
├── vite.config.ts                       # Vite configuration
├── LICENSE                              # MIT License
└── README.md                            # This file
```

## Learning Concepts Demonstrated

### 1. React Router Architecture
- **BrowserRouter**: Client-side routing setup
- **Routes & Route**: Declarative route configuration  
- **Outlet Context**: Professional state sharing pattern
- **useOutletContext**: Hook-based context consumption

### 2. Custom Hook Patterns
- usePreferences() encapsulates complex state logic
- Follows React Hook rules and conventions
- Reusable across multiple components

### 3. Clean Component Architecture
- **Single Responsibility Principle**: Each file has one clear purpose
- **Separation of Concerns**: Types, logic, data, and UI are cleanly separated
- **Professional File Organization**: Follows industry-standard React project structure
- **Maintainable Code**: Small, focused components (18-120 lines each)

### 4. Professional UI Patterns
- Custom CSS without external frameworks
- Responsive design principles
- Smooth transitions and visual feedback
- Accessible interaction patterns

## Development Workflow

### Adding New Preferences

1. **Update types** in `src/types/preferences.ts`
2. **Update default state** in `src/hooks/usePreferences.ts`
3. **Add UI controls** in `src/components/SettingsPage.tsx`
4. **Apply preferences** in `src/components/PreviewPage.tsx`
5. **Test live updates** between pages

### Adding New Pages

1. **Create new component** in `src/components/`
2. **Add Route** to `src/components/PreferenceDashboard.tsx`
3. **Update navigation** in `src/components/Navigation.tsx`
4. **Access shared state** via `useOutletContext<OutletContext>()`

## Key Features

- **Live Theme Switching**: Instant visual updates across the entire app
- **Mood-Based Content**: Dynamic quotes and styling based on mood selection
- **Accessibility**: Configurable text sizes for better readability
- **Personalization**: Custom greeting messages
- **Responsive Design**: Works seamlessly on all device sizes
- **State Persistence**: Preferences maintained during navigation
- **Fast Development**: Built with Vite for optimal developer experience

## Assessment Criteria Met

✅ **Multi-page application**: Settings and Preview pages with React Router navigation  
✅ **Two distinct pages**: Clear separation of concerns between configuration and preview  
✅ **Multiple preferences**: Theme, mood, text size, and greeting (4 total)  
✅ **Custom state hook**: usePreferences() managing structured state object  
✅ **State sharing**: Outlet context implementation for component communication  
✅ **Live updates**: Preview page reflects current preferences in real-time  

## Technology Stack

- **React 18**: Modern React with hooks
- **React Router 7**: Latest routing capabilities with Outlet context
- **TypeScript**: Type-safe development
- **Vite**: Fast development and build tooling
- **Custom CSS**: No external styling frameworks
- **Modern JavaScript**: ES6+ features and patterns

## Connection to React Router Learning

This project demonstrates mastery of:

- **Advanced State Management**: Custom hooks managing complex state objects
- **Route-Based Architecture**: Professional multi-page application structure  
- **Context Patterns**: Sharing state between route components
- **Component Organization**: Clean separation between layout, pages, and state logic

The implementation showcases how React Router enables building scalable, maintainable applications with proper state management and component communication patterns.

---

**Built with**: React, TypeScript, React Router, Vite, and custom CSS styling
