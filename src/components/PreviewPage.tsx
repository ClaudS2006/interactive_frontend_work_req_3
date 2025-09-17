import { useOutletContext } from "react-router-dom";
import type { OutletContext } from "../types/preferences";
import { moodContent } from "../constants/moodContent";

export function PreviewPage() {
  const { preferences } = useOutletContext<OutletContext>();
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
