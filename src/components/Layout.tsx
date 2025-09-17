import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { usePreferences } from "../hooks/usePreferences";

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
