import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import SoftwareSection from "./components/SoftwareSection";
import EmbeddedSection from "./components/EmbeddedSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumePage from "./pages/ResumePage";
import SoftwareResume from "./pages/SoftwareResume";
import EmbeddedResume from "./pages/EmbeddedResume";

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.title = "Shubham Asole - Software & Embedded Systems Engineer";

    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionText =
      "Full-Stack Developer & Embedded Systems Engineer specializing in MERN stack, IoT, and real-time control systems. Building scalable solutions.";

    if (metaDescription) {
      metaDescription.setAttribute("content", descriptionText);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descriptionText;
      document.head.appendChild(meta);
    }
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <Router>
      <div className={isDark ? "dark" : ""}>
        <Header isDark={isDark} toggleTheme={toggleTheme} />

        <Routes>
          <Route
            path="/"
            element={
              <main className="bg-white dark:bg-gray-900 transition-all duration-500">
                <Hero isDark={isDark} />
                <About isDark={isDark} />
                <SoftwareSection isDark={isDark} />
                <EmbeddedSection isDark={isDark} />
                <Contact isDark={isDark} />
                <Footer isDark={isDark} />
              </main>
            }
          />
          <Route path="/resume" element={<ResumePage isDark={isDark} />} />
          <Route
            path="/resume/embedded"
            element={<EmbeddedResume isDark={isDark} />}
          />
          <Route
            path="/resume/software"
            element={<SoftwareResume isDark={isDark} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
