import type { Preferences } from "../types/preferences";

interface MoodData {
  emoji: string;
  quote: string;
  color: string;
  bgColor: string;
}

export const moodContent: Record<Preferences["mood"], MoodData> = {
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
