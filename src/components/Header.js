import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Header({ isDark, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }

    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md shadow-lg ${
        isDark ? "bg-gray-900/95 text-white" : "bg-white/95 text-gray-900"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Shubham Asole
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-blue-500 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-blue-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("software")}
              className="hover:text-blue-500 transition-colors"
            >
              Software
            </button>
            <button
              onClick={() => scrollToSection("embedded")}
              className="hover:text-blue-500 transition-colors"
            >
              Embedded
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-blue-500 transition-colors"
            >
              Contact
            </button>

            <Link
              to="/resume"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold flex items-center gap-2"
            >
              <Download size={18} />
              Resume
            </Link>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-transform hover:scale-110 ${
                isDark
                  ? "bg-gray-800 text-yellow-300"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              {isDark ? "🌞" : "🌙"}
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div
            className={`md:hidden mt-4 pb-4 space-y-4 ${
              isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            }`}
          >
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left hover:text-blue-500 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left hover:text-blue-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("software")}
              className="block w-full text-left hover:text-blue-500 transition-colors"
            >
              Software
            </button>
            <button
              onClick={() => scrollToSection("embedded")}
              className="block w-full text-left hover:text-blue-500 transition-colors"
            >
              Embedded
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left hover:text-blue-500 transition-colors"
            >
              Contact
            </button>

            <Link
              to="/resume"
              className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Resume
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
