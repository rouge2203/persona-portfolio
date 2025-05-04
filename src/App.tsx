import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import "../globals.css";
import { useState, useEffect } from "react";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  // Force remount of components when route changes
  const key = currentPath;

  return (
    <Router>
      <div className="min-h-screen">
        <main>
          <Routes>
            <Route path="/" element={<Index key={`index-${key}`} />} />
            <Route path="/about" element={<About key={`about-${key}`} />} />
            <Route
              path="/projects"
              element={<Projects key={`projects-${key}`} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
