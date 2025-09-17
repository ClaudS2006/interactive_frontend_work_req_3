// Preference types
export interface Preferences {
  theme: "light" | "dark" | "colorful";
  mood: "cheerful" | "calm" | "energetic" | "cozy";
  textSize: "small" | "medium" | "large" | "xlarge";
  greeting: string;
}

// Outlet context type for React Router
export interface OutletContext {
  preferences: Preferences;
  updatePreference: (key: keyof Preferences, value: string) => void;
}
