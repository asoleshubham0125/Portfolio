import { Github } from "lucide-react";

export default function SoftwareSection({ isDark }) {
  const skills = {
    languages: ["Java", "JavaScript", "Python", "SQL", "HTML5", "CSS3"],
    frameworks: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "Bootstrap",
      "Tailwind",
      "EJS",
    ],
    backend: ["REST APIs", "MVC"],
    databases: ["MongoDB", "MySQL"],
    tools: ["Git", "VS Code", "Mongoose"],
    coreCS: ["DSA", "OOP", "DBMS", "OS"],
  };

  const projects = [
    {
      title: "StatzHub",
      subtitle: "Full-Stack Trading Platform",
      description:
        "Zerodha-inspired multi-app MERN platform with marketing site and trading dashboard featuring real-time data visualization.",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Chart.js"],
      highlights: [
        "JWT authentication & modular REST APIs",
        "React dashboard with Watchlist, Holdings, Positions, Orders",
        "Real-time chart visualizations with Chart.js",
        "Buy/Sell workflow simulation with MongoDB models",
      ],
      github: "https://github.com/asoleshubham0125/StatzHub",
    },
    {
      title: "GoBnB",
      subtitle: "Full-Stack Accommodation Platform",
      description:
        "Airbnb-style web application with comprehensive booking features, mapping integration, and cloud storage.",
      tech: [
        "MongoDB",
        "Express",
        "Node.js",
        "Passport.js",
        "Cloudinary",
        "Mapbox",
      ],
      highlights: [
        "Session-based authentication with Passport.js",
        "Cloudinary integration for image uploads",
        "Mapbox for interactive location mapping",
        "MVC architecture with EJS templates",
      ],
      github: "https://github.com/asoleshubham0125/GoBnB",
    },
    {
      title: "Weather Widgets",
      subtitle: "React Weather Dashboard",
      description:
        "Real-time weather application with clean UI and modular component architecture.",
      tech: ["React", "OpenWeatherMap API", "Material UI", "JavaScript"],
      highlights: [
        "Real-time weather data from OpenWeatherMap API",
        "Modular, reusable component design",
        "Responsive Material UI interface",
        "Location-based weather forecasting",
      ],
      github: "https://github.com/asoleshubham0125/Weather-Widgets",
    },
    {
      title: "Snake Game 🎮",
      subtitle: "Browser-Based Classic Snake",
      description:
        "A simple and fun Snake Game built using HTML, CSS, and JavaScript with score tracking and sound effects.",
      tech: ["HTML", "CSS", "JavaScript"],
      highlights: [
        "Smooth classic snake movement",
        "Food generation and snake growth logic",
        "Score tracking and game-over detection",
        "Keyboard controls using arrow keys",
        "Includes sound effects and clean UI",
      ],
      github: "https://github.com/asoleshubham0125/SnakeGame",
    },
  ];

  return (
    <section
      id="software"
      className={`py-20 ${
        isDark ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Software{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Engineering
            </span>
          </h2>

          <p
            className={`text-center text-lg mb-16 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Building scalable web applications and backend systems
          </p>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Technical Skills
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div
                className={`p-6 rounded-xl shadow-lg ${
                  isDark ? "bg-gray-900" : "bg-white"
                }`}
              >
                <h4 className="font-bold mb-4 text-blue-500">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDark
                          ? "bg-gray-800 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`p-6 rounded-xl shadow-lg ${
                  isDark ? "bg-gray-900" : "bg-white"
                }`}
              >
                <h4 className="font-bold mb-4 text-cyan-500">Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDark
                          ? "bg-gray-800 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`p-6 rounded-xl shadow-lg ${
                  isDark ? "bg-gray-900" : "bg-white"
                }`}
              >
                <h4 className="font-bold mb-4 text-teal-500">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDark
                          ? "bg-gray-800 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`p-6 rounded-xl shadow-lg ${
                  isDark ? "bg-gray-900" : "bg-white"
                }`}
              >
                <h4 className="font-bold mb-4 text-green-500">Core CS</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.coreCS.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDark
                          ? "bg-gray-800 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="col-span-full flex justify-center gap-6 flex-wrap">
                <div
                  className={`p-6 rounded-xl shadow-lg ${
                    isDark ? "bg-gray-900" : "bg-white"
                  }`}
                >
                  <h4 className="font-bold mb-4 text-purple-500">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDark
                            ? "bg-gray-800 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`p-6 rounded-xl shadow-lg ${
                    isDark ? "bg-gray-900" : "bg-white"
                  }`}
                >
                  <h4 className="font-bold mb-4 text-yellow-500">Databases</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDark
                            ? "bg-gray-800 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Featured Projects
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl ${
                    isDark
                      ? "bg-gray-900 hover:bg-gray-850"
                      : "bg-white hover:shadow-2xl"
                  } transition-all duration-300 hover:scale-105 border ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <h4 className="text-2xl font-bold mb-2">{project.title}</h4>

                  <p className="text-blue-500 font-semibold mb-4">
                    {project.subtitle}
                  </p>

                  <p
                    className={`mb-6 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 text-sm ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          <span className="text-blue-500 mt-1">▹</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                        isDark
                          ? "bg-gray-800 hover:bg-gray-700"
                          : "bg-gray-100 hover:bg-gray-200"
                      } transition-colors`}
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
