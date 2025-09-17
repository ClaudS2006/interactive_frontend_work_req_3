import { useState } from "react";
import type { Preferences } from "../types/preferences";

export function usePreferences(): [
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
