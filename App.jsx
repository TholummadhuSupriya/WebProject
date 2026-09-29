import { Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import NearbyWells from "./pages/NearbyWells";
import ComparableWells from "./pages/ComparableWells";
import HistoricalEvents from "./pages/HistoricalEvents";
import Correlation from "./pages/Correlation";
import RiskIntelligence from "./pages/RiskIntelligence";
import EvidenceLessons from "./pages/EvidenceLessons";
import WellReplay from "./pages/WellReplay";
import HistoricalAssistant from "./pages/HistoricalAssistant";
import EngineerFeedback from "./pages/EngineerFeedback";
import PostWellLearning from "./pages/PostWellLearning";
import WellComparison from "./pages/WellComparison";
import Analytics from "./pages/Analytics";
import Notifications from "./pages/Notifications";
import Security from "./pages/Security";
import ActiveWell from "./pages/ActiveWell";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Welcome from "./pages/Welcome";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";

function Protected({ children }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}

function App() {
  return (
    <Routes>
      {/* Public landing page */}
      <Route
        path="/"
        element={<Navigate to="/welcome" replace />}
      />

      <Route
        path="/welcome"
        element={<Welcome />}
      />

      {/* Public authentication pages */}
      <Route
        path="/sign-in"
        element={<SignIn />}
      />

      <Route
        path="/signin"
        element={<Navigate to="/sign-in" replace />}
      />

      <Route
        path="/signup"
        element={<SignUp />}
      />

      {/* Protected application */}

      <Route
        path="/dashboard"
        element={
          <Protected>
            <Dashboard />
          </Protected>
        }
      />

      <Route
        path="/active-well"
        element={
          <Protected>
            <ActiveWell />
          </Protected>
        }
      />

      <Route
        path="/nearby-wells"
        element={
          <Protected>
            <NearbyWells />
          </Protected>
        }
      />

      <Route
        path="/comparable-wells"
        element={
          <Protected>
            <ComparableWells />
          </Protected>
        }
      />

      <Route
        path="/correlation"
        element={
          <Protected>
            <Correlation />
          </Protected>
        }
      />

      <Route
        path="/historical-events"
        element={
          <Protected>
            <HistoricalEvents />
          </Protected>
        }
      />

      <Route
        path="/ai-assistant"
        element={
          <Protected>
            <HistoricalAssistant />
          </Protected>
        }
      />

      <Route
        path="/engineer-feedback"
        element={
          <Protected>
            <EngineerFeedback />
          </Protected>
        }
      />

      <Route
        path="/post-well-learning"
        element={
          <Protected>
            <PostWellLearning />
          </Protected>
        }
      />

      <Route
        path="/well-comparison"
        element={
          <Protected>
            <WellComparison />
          </Protected>
        }
      />

      <Route
        path="/alerts"
        element={
          <Protected>
            <RiskIntelligence />
          </Protected>
        }
      />

      <Route
        path="/notifications"
        element={
          <Protected>
            <Notifications />
          </Protected>
        }
      />

      <Route
        path="/well-replay"
        element={
          <Protected>
            <WellReplay />
          </Protected>
        }
      />

      <Route
        path="/evidence-lessons"
        element={
          <Protected>
            <EvidenceLessons />
          </Protected>
        }
      />

      <Route
        path="/security"
        element={
          <Protected>
            <Security />
          </Protected>
        }
      />

      <Route
        path="/analytics"
        element={
          <Protected>
            <Analytics />
          </Protected>
        }
      />

      <Route
        path="/settings"
        element={
          <Protected>
            <Settings />
          </Protected>
        }
      />

      <Route
        path="/profile"
        element={
          <Protected>
            <Profile />
          </Protected>
        }
      />

      {/* Unknown URL */}
      <Route
        path="*"
        element={
          <Navigate
            to="/welcome"
            replace
          />
        }
      />
    </Routes>
  );
}

export default App;