import { useOutletContext } from "react-router-dom";
import type { OutletContext } from "../types/preferences";

export function SettingsPage() {
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
