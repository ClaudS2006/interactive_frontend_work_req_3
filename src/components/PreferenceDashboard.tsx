import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useOutletContext,
  Navigate,
} from "react-router-dom";

// Types
interface Preferences {
  theme: "light" | "dark" | "colorful";
  mood: "cheerful" | "calm" | "energetic" | "cozy";
  textSize: "small" | "medium" | "large" | "xlarge";
  greeting: string;
}

interface OutletContext {
  preferences: Preferences;
  updatePreference: (key: keyof Preferences, value: string) => void;
}

// Custom Hook for Preference Management (from your Chapter 5 learning!)
function usePreferences(): [
  Preferences,
  (key: keyof Preferences, value: string) => void
] {
  const [preferences, setPreferences] = useState<Preferences>({
    theme: "light",
    mood: "cheerful",
    textSize: "medium",
    greeting: "Hello there!",
  });

  const updatePreference = (key: keyof Preferences, value: string) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return [preferences, updatePreference];
}

// Layout Component with Outlet Context
function Layout() {
  const [preferences, updatePreference] = usePreferences();

  return (
    <div className={`theme-${preferences.theme}`}>
      <nav className="nav">
        <div className="nav-container">
          <h1 className="nav-title">🎨 Preference Dashboard</h1>
          <div className="nav-buttons">
            <Link to="/settings" className="nav-button">
              ⚙️ Settings
            </Link>
            <Link to="/preview" className="nav-button">
              👁️ Preview
            </Link>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <Outlet context={{ preferences, updatePreference }} />
      </main>
    </div>
  );
}

// Settings Page Component
function SettingsPage() {
  const { preferences, updatePreference } = useOutletContext<OutletContext>();

  return (
    <div className={`text-${preferences.textSize}`}>
      <h2
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}
      >
        🎛️ Customize Your Experience
      </h2>

      {/* Theme Selection */}
      <div className="card">
        <h3 className="card-title">🎨 Theme</h3>
        <div className="grid-3">
          {[
            {
              value: "light" as const,
              emoji: "☀️",
              label: "Light",
              desc: "Clean & minimal",
            },
            {
              value: "dark" as const,
              emoji: "🌙",
              label: "Dark",
              desc: "Easy on eyes",
            },
            {
              value: "colorful" as const,
              emoji: "🌈",
              label: "Colorful",
              desc: "Vibrant & bold",
            },
          ].map((theme) => (
            <button
              key={theme.value}
              onClick={() => updatePreference("theme", theme.value)}
              className={`option-button ${
                preferences.theme === theme.value ? "selected" : ""
              }`}
            >
              <div className="text-center">
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                  {theme.emoji}
                </div>
                <div style={{ fontWeight: "600" }}>{theme.label}</div>
                <div
                  className="opacity-75"
                  style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}
                >
                  {theme.desc}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Mood Selection */}
      <div className="card">
        <h3 className="card-title">💭 Mood</h3>
        <div className="grid-2">
          {[
            {
              value: "cheerful" as const,
              emoji: "😊",
              label: "Cheerful",
              desc: "Bright and positive",
            },
            {
              value: "calm" as const,
              emoji: "😌",
              label: "Calm",
              desc: "Peaceful and serene",
            },
            {
              value: "energetic" as const,
              emoji: "⚡",
              label: "Energetic",
              desc: "High energy vibes",
            },
            {
              value: "cozy" as const,
              emoji: "🏠",
              label: "Cozy",
              desc: "Warm and comfortable",
            },
          ].map((mood) => (
            <button
              key={mood.value}
              onClick={() => updatePreference("mood", mood.value)}
              className={`option-button ${
                preferences.mood === mood.value ? "selected" : ""
              }`}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <span style={{ fontSize: "2rem" }}>{mood.emoji}</span>
                <div>
                  <div style={{ fontWeight: "600" }}>{mood.label}</div>
                  <div className="opacity-75" style={{ fontSize: "0.875rem" }}>
                    {mood.desc}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Text Size Selection */}
      <div className="card">
        <h3 className="card-title">📏 Text Size</h3>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          {[
            {
              value: "small" as const,
              label: "Small",
              preview: "Compact and efficient",
            },
            {
              value: "medium" as const,
              label: "Medium",
              preview: "Perfect balance",
            },
            {
              value: "large" as const,
              label: "Large",
              preview: "Easy to read",
            },
            {
              value: "xlarge" as const,
              label: "Extra Large",
              preview: "Maximum readability",
            },
          ].map((size) => (
            <button
              key={size.value}
              onClick={() => updatePreference("textSize", size.value)}
              className={`option-button ${
                preferences.textSize === size.value ? "selected" : ""
              }`}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    className={`text-${size.value}`}
                    style={{ fontWeight: "600" }}
                  >
                    {size.label}
                  </div>
                  <div className={`text-${size.value} opacity-75 mt-1`}>
                    {size.preview}
                  </div>
                </div>
                <div style={{ fontSize: "1.5rem" }}>
                  {preferences.textSize === size.value ? "✓" : "○"}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Greeting */}
      <div className="card">
        <h3 className="card-title">👋 Personal Greeting</h3>
        <input
          type="text"
          value={preferences.greeting}
          onChange={(e) => updatePreference("greeting", e.target.value)}
          placeholder="Enter your custom greeting..."
          className="text-input"
        />
        <div className="opacity-75 mt-2" style={{ fontSize: "0.875rem" }}>
          This will appear on your preview page
        </div>
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          background: "rgba(34, 197, 94, 0.2)",
          borderRadius: "8px",
          border: "1px solid rgba(34, 197, 94, 0.3)",
        }}
      >
        <div style={{ fontSize: "0.875rem" }}>
          💡 <strong>Live Updates:</strong> Changes are applied instantly!
          Switch to the Preview page to see your customizations in action.
        </div>
      </div>
    </div>
  );
}

// Preview Page Component
function PreviewPage() {
  const { preferences } = useOutletContext<OutletContext>();

  const moodContent = {
    cheerful: {
      emoji: "😊",
      quote:
        "Every day is a new beginning. Take a deep breath, smile, and start again.",
      color: "#fbbf24",
      bgColor: "rgba(251, 191, 36, 0.2)",
    },
    calm: {
      emoji: "😌",
      quote: "Peace comes from within. Do not seek it without.",
      color: "#60a5fa",
      bgColor: "rgba(96, 165, 250, 0.2)",
    },
    energetic: {
      emoji: "⚡",
      quote: "Your energy introduces you before you even speak!",
      color: "#fb923c",
      bgColor: "rgba(251, 146, 60, 0.2)",
    },
    cozy: {
      emoji: "🏠",
      quote: "Home is not a place, it's a feeling of warmth and belonging.",
      color: "#f87171",
      bgColor: "rgba(248, 113, 113, 0.2)",
    },
  };

  const currentMood = moodContent[preferences.mood];

  return (
    <div className={`text-${preferences.textSize}`}>
      {/* Welcome Section */}
      <div className="text-center" style={{ marginBottom: "2rem" }}>
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>
          {currentMood.emoji}
        </div>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
        >
          {preferences.greeting}
        </h2>
        <div className="opacity-75" style={{ fontSize: "1.25rem" }}>
          Welcome to your personalized space
        </div>
      </div>

      {/* Quote Card */}
      <div
        className="card text-center"
        style={{
          background: currentMood.bgColor,
          border: `1px solid ${currentMood.color}40`,
          marginBottom: "2rem",
        }}
      >
        <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✨</div>
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "500",
            color: currentMood.color,
            lineHeight: "1.6",
            marginBottom: "1rem",
          }}
        >
          "{currentMood.quote}"
        </div>
        <div className="opacity-75" style={{ fontSize: "1.125rem" }}>
          Current mood:{" "}
          <span style={{ textTransform: "capitalize", fontWeight: "600" }}>
            {preferences.mood}
          </span>
        </div>
      </div>

      {/* Preference Summary */}
      <div className="card">
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ marginRight: "0.75rem" }}>⚙️</span> Your Current
          Settings
        </h3>
        <div className="grid-2">
          <div className="card">
            <div
              style={{
                fontWeight: "600",
                opacity: 0.75,
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Theme
            </div>
            <div
              style={{
                textTransform: "capitalize",
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginTop: "0.25rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              {preferences.theme === "light" && (
                <span style={{ marginRight: "0.5rem" }}>☀️</span>
              )}
              {preferences.theme === "dark" && (
                <span style={{ marginRight: "0.5rem" }}>🌙</span>
              )}
              {preferences.theme === "colorful" && (
                <span style={{ marginRight: "0.5rem" }}>🌈</span>
              )}
              {preferences.theme}
            </div>
          </div>
          <div className="card">
            <div
              style={{
                fontWeight: "600",
                opacity: 0.75,
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Mood
            </div>
            <div
              style={{
                textTransform: "capitalize",
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginTop: "0.25rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: "0.5rem" }}>{currentMood.emoji}</span>
              {preferences.mood}
            </div>
          </div>
          <div className="card">
            <div
              style={{
                fontWeight: "600",
                opacity: 0.75,
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Text Size
            </div>
            <div
              style={{
                textTransform: "capitalize",
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginTop: "0.25rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: "0.5rem" }}>📏</span>
              {preferences.textSize}
            </div>
          </div>
          <div className="card">
            <div
              style={{
                fontWeight: "600",
                opacity: 0.75,
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Greeting
            </div>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginTop: "0.25rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: "0.5rem" }}>👋</span>"
              {preferences.greeting}"
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-center card"
        style={{
          background:
            "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(219, 39, 119, 0.2) 100%)",
          border: "1px solid rgba(139, 92, 246, 0.3)",
        }}
      >
        <div style={{ fontSize: "1.125rem" }}>
          🎨 <strong>Loving your setup?</strong> Head back to Settings to
          explore more customization options!
        </div>
      </div>
    </div>
  );
}

// Main App Component
function PreferenceDashboard() {
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

export default PreferenceDashboard;
