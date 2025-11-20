import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";

export default function Hero({ isDark }) {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-20 transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-cyan-50"
      }`}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1
              className={`text-5xl md:text-7xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Shubham Asole
              </span>
            </h1>

            <div className="text-2xl md:text-3xl font-light space-y-2">
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                Full-Stack Developer · Backend Engineer
              </p>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                Embedded Systems · Robotics · IoT
              </p>
            </div>
          </div>

          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Building scalable backend systems and innovative embedded solutions.
            Transforming ideas into production-ready applications with clean
            code and cutting-edge technology.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
              } transition-all hover:scale-110`}
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/shubham-asole/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full ${
                isDark
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
              } transition-all hover:scale-110`}
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:asoleshubham01@gmail.com"
              className={`p-3 rounded-full ${
                isDark
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
              } transition-all hover:scale-110`}
            >
              <Mail size={24} />
            </a>

            <a
              href="tel:+918767239628"
              className={`p-3 rounded-full ${
                isDark
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
              } transition-all hover:scale-110`}
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
