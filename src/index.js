import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import SoftwareSection from "./components/SoftwareSection";
import EmbeddedSection from "./components/EmbeddedSection";
import Contact from "./components/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Header />
      <Hero />
      <About />
      <SoftwareSection />
      <EmbeddedSection />
      <Contact />
    </div>
  </React.StrictMode>
);
