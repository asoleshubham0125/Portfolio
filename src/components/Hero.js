import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero({ isDark }) {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full-Stack Developer",
    "Backend Engineer",
    "Software Engineer",
    "MERN Stack Developer",
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-20 relative overflow-hidden transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-cyan-50"
      }`}
    >
      {/* Floating Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`floating-dot absolute top-1/4 left-1/4 w-2 h-2 rounded-full ${
            isDark ? "bg-blue-500/20" : "bg-blue-400/30"
          }`}
        ></div>
        <div
          className={`floating-dot absolute top-1/3 right-1/3 w-3 h-3 rounded-full ${
            isDark ? "bg-cyan-500/20" : "bg-cyan-400/30"
          }`}
        ></div>
        <div
          className={`floating-dot absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full ${
            isDark ? "bg-teal-500/20" : "bg-teal-400/30"
          }`}
        ></div>
        <div
          className={`floating-dot absolute top-2/3 right-1/4 w-2.5 h-2.5 rounded-full ${
            isDark ? "bg-blue-400/15" : "bg-blue-300/25"
          }`}
        ></div>
        <div
          className={`floating-dot absolute bottom-1/3 right-1/2 w-2 h-2 rounded-full ${
            isDark ? "bg-cyan-400/15" : "bg-cyan-300/25"
          }`}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p
              className={`text-sm md:text-base font-semibold tracking-widest uppercase ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Welcome to my portfolio
            </p>

            <h1
              className={`text-5xl md:text-7xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Hi, I'm{" "}
              <span className="animated-gradient-text">Shubham Asole</span>
            </h1>

            <div className="text-2xl md:text-3xl font-light h-10">
              <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                {displayText}
              </span>
              <span className="typing-cursor"></span>
            </div>

            <p
              className={`text-base md:text-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Embedded Systems · Robotics · IoT
            </p>
          </div>

          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Aspiring Software Engineer skilled in Java and JavaScript,
            developing scalable backend services and responsive web applications
            by applying strong DSA fundamentals, clean coding practices, and
            efficient debugging.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 pulse-cta"
            >
              Hire Me
            </button>

            <a
              href="#about"
              className={`px-8 py-4 rounded-full font-semibold border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            >
              View Work
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com/asoleshubham0125"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full ${
                isDark
                  ? "bg-gray-700/50 hover:bg-gray-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
              } transition-all hover:scale-110 hover:-translate-y-1`}
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/shubham-asole/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full ${
                isDark
                  ? "bg-gray-700/50 hover:bg-gray-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
              } transition-all hover:scale-110 hover:-translate-y-1`}
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:asoleshubham01@gmail.com"
              className={`p-3 rounded-full ${
                isDark
                  ? "bg-gray-700/50 hover:bg-gray-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
              } transition-all hover:scale-110 hover:-translate-y-1`}
            >
              <Mail size={24} />
            </a>

            <a
              href="tel:+918767239628"
              className={`p-3 rounded-full ${
                isDark
                  ? "bg-gray-700/50 hover:bg-gray-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
              } transition-all hover:scale-110 hover:-translate-y-1`}
            >
              <Phone size={24} />
            </a>
          </div>

          <div className="pt-12 animate-bounce">
            <ArrowDown
              className={`mx-auto ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
              size={32}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
