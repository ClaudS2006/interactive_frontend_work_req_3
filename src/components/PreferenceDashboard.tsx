import { BrowserRouter as Router, Routes,Route,Navigate,} from "react-router-dom";
import { Layout } from "./Layout";
import { SettingsPage } from "./SettingsPage";
import { PreviewPage } from "./PreviewPage";

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

export default PreferenceDashboard;
