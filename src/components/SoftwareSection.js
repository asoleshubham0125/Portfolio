import { Github } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function SoftwareSection({ isDark }) {
  const sectionRef = useScrollReveal();

  const skills = {
    languages: ["Java", "JavaScript", "Python", "SQL", "TypeScript", "Bash"],
    csFundamentals: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "System Design",
    ],
    backendApis: [
      "REST APIs",
      "Node.js",
      "Express.js",
      "Microservices",
      "SOA",
      "Distributed Systems",
      "JWT",
      "WebSockets",
    ],
    frontend: ["React", "Context API", "Material UI", "Chart.js"],
    databases: ["MongoDB", "MySQL", "PostgreSQL", "Mongoose", "Prisma ORM"],
    devopsCloud: [
      "Git",
      "GitHub",
      "CI/CD Basics",
      "Linux/Unix",
      "Vercel",
      "Render",
      "Sentry",
    ],
  };

  const skillCategories = [
    { title: "Languages", items: skills.languages, color: "text-blue-500" },
    {
      title: "CS Fundamentals",
      items: skills.csFundamentals,
      color: "text-purple-500",
    },
    {
      title: "Backend & APIs",
      items: skills.backendApis,
      color: "text-cyan-500",
    },
    { title: "Frontend", items: skills.frontend, color: "text-teal-500" },
    { title: "Databases", items: skills.databases, color: "text-yellow-500" },
    {
      title: "DevOps & Cloud",
      items: skills.devopsCloud,
      color: "text-green-500",
    },
  ];

  const projects = [
    {
      title: "LoadMitrra",
      subtitle: "Full-Stack MERN Freight Matching & Logistics Platform",
      description:
        "A full-stack MERN platform to streamline B2B freight matching for dual user bases, featuring role-based interactive dashboards with integrated vehicle-type matching and automated billing workflows.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "JWT",
        "Mongoose",
        "Google Maps SDK",
        "Leaflet",
      ],
      highlights: [
        "Achieved near-zero message latency via real-time room-based WebSocket communication layer engineered with Socket.io",
        "Enforced strict data consistency across a 5-stage shipment lifecycle with robust Express.js REST APIs and optimized Mongoose schemas",
        "Implemented custom RBAC middleware utilizing stateless JWT authentication and secure Axios interceptors",
        "Integrated React Google Maps SDK and Leaflet APIs for dynamic, coordinate-driven visual rendering",
        "Guaranteed 100% perceived message delivery with optimistic UI rendering fallbacks on Vercel & Render",
      ],
      github: "https://github.com/asoleshubham0125/LoadMitrraApp",
      featured: true,
    },
    {
      title: "CLIPFORGE",
      subtitle: "AI Viral Content Generation SaaS",
      description:
        "A full-stack AI SaaS platform automating the generation of viral marketing creatives, achieving a scalable, production-ready environment optimized for digital advertising using the PERN stack.",
      tech: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "Google Gemini API",
        "Clerk Auth",
        "Cloudinary",
        "Sentry",
      ],
      highlights: [
        "Automated media generation pipeline producing professional lifestyle creatives via Google Gemini API",
        "Engineered scalable RESTful backend with Express.js, TypeScript, and Prisma ORM for robust API performance",
        "Production-grade access control with Clerk Auth, custom middleware, and webhook-based data syncing",
        "Optimized media delivery with Cloudinary CDN-backed storage for rapid uploads and on-the-fly transformations",
        "Custom credit-based SaaS monetization model with responsive React frontend for subscription tracking",
        "Deployed via Vercel + Render with Sentry for real-time error tracking and monitoring",
      ],
      github: "https://github.com/asoleshubham0125/CLIPFORGE.ai",
      featured: true,
    },
    {
      title: "StatzHub",
      subtitle: "Full-Stack Trading & Investment Platform",
      description:
        "Zerodha-inspired multi-app MERN platform with marketing site and trading dashboard featuring real-time data visualization and modular architecture.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Context API",
        "Chart.js",
      ],
      highlights: [
        "Developed modular RESTful APIs for users, orders, holdings, and positions with scalable CRUD operations",
        "Optimized MongoDB (Mongoose) schemas with validations for trading entities and portfolio data",
        "Secure JWT authentication with middleware-based route protection across marketing site and dashboard",
        "Feature-rich React dashboard with Watchlist, Holdings, Positions, Orders, and Summary modules",
        "Portfolio analytics via Chart.js with doughnut and bar charts for distribution insights",
      ],
      github: "https://github.com/asoleshubham0125/StatzHub",
    },
    {
      title: "GoBnB",
      subtitle: "Full-Stack Accommodation Booking Platform",
      description:
        "Airbnb-inspired booking platform with comprehensive property listings, mapping integration, cloud storage, and MVC architecture.",
      tech: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "EJS",
        "Passport.js",
        "Cloudinary",
        "Mapbox",
        "Bootstrap",
        "Joi",
      ],
      highlights: [
        "Secure authentication and session handling using Passport.js with express-session and connect-flash",
        "Cloudinary integration for image upload and streamlined listing media management",
        "Interactive property mapping with Mapbox geocoding for accurate address-based search",
        "Backend reliability with Joi request validation and clean MVC architecture",
      ],
      github: "https://github.com/asoleshubham0125/GoBnB",
    },
    {
      title: "Weather Widgets",
      subtitle: "React Weather Dashboard",
      description:
        "Real-time weather application fetching live data via OpenWeatherMap API with modular component architecture and Material UI design.",
      tech: ["React", "Vite", "OpenWeatherMap API", "Material UI", "CSS"],
      highlights: [
        "Dynamic search for temperature, humidity, and weather conditions via API requests",
        "Reusable modular UI components (SearchBox, InfoBox, WeatherApp) for clean architecture",
        "Responsive Material UI interface with secure API handling via environment variables",
      ],
      github: "https://github.com/asoleshubham0125/Weather-Widgets",
    },
    {
      title: "Snake Game 🎮",
      subtitle: "Interactive Browser-Based Snake Game",
      description:
        "A fun Snake Game built using HTML, CSS, and JavaScript with score tracking, sound effects, and difficulty scaling.",
      tech: ["HTML", "CSS", "JavaScript"],
      highlights: [
        "Real-time snake movement with keyboard controls and collision detection via efficient DOM updates",
        "Scoring and difficulty scaling by increasing speed at milestones for gameplay progression",
        "Sound effects and responsive grid-based UI for smoother animations",
      ],
      github: "https://github.com/asoleshubham0125/SnakeGame",
    },
    {
      title: "Simon Says",
      subtitle: "Algorithmic Memory Game",
      description:
        "A colorful browser-based memory game where players repeat an increasingly complex sequence of flashing buttons.",
      tech: ["JavaScript", "HTML", "CSS"],
      highlights: [
        "Modular game logic using OOP principles for input validation, level progression, and scoring",
        "Progressive difficulty with visual button-flash feedback and smooth animations",
      ],
      github: "https://github.com/asoleshubham0125/Simon-says-game",
    },
    {
      title: "Spotify Web Player Clone",
      subtitle: "Responsive Spotify UI Clone",
      description:
        "A responsive Spotify Web Player UI clone replicating key layout sections and modern streaming app design.",
      tech: ["HTML5", "CSS3"],
      highlights: [
        "Reusable UI components (sidebar, navbar, player controls, playlist sections) with modular structure",
        "Responsive design delivering clean and consistent user experience across devices",
      ],
      github: "https://github.com/asoleshubham0125/Spotify-Clone",
    },
  ];

  return (
    <section
      id="software"
      ref={sectionRef}
      className={`py-20 ${
        isDark ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fade-in-up">
            Software{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Engineering
            </span>
          </h2>

          <div className="section-divider mb-4 fade-in-up"></div>

          <p
            className={`text-center text-lg mb-16 fade-in-up ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Building scalable web applications and backend systems
          </p>

          {/* Skills Grid */}
          <div className="mb-16 fade-in-up">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Technical Skills
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 stagger-children">
              {skillCategories.map((category, idx) => (
                <div
                  key={idx}
                  className={`fade-in-up p-6 rounded-xl shadow-lg card-shine ${
                    isDark ? "bg-gray-900" : "bg-white"
                  }`}
                >
                  <h4 className={`font-bold mb-4 ${category.color}`}>
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, i) => (
                      <span
                        key={i}
                        className={`skill-tag px-3 py-1 rounded-full text-sm cursor-default ${
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
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mb-16 fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Analytical Thinking",
                "Collaboration",
                "Ownership",
                "Adaptability",
                "Communication",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="skill-tag px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 text-blue-400 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center fade-in-up">
              Featured Projects
            </h3>

            <div className="grid md:grid-cols-2 gap-8 stagger-children">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`fade-in-up p-8 rounded-2xl card-shine gradient-border ${
                    isDark
                      ? "bg-gray-900 hover:bg-gray-850"
                      : "bg-white hover:shadow-2xl"
                  } transition-all duration-300 hover:scale-[1.02] border ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  } ${project.featured ? "glow-blue" : ""}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-2xl font-bold">{project.title}</h4>
                    {project.featured && (
                      <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-md">
                        FEATURED
                      </span>
                    )}
                  </div>

                  <p className="text-blue-500 font-semibold mb-4">
                    {project.subtitle}
                  </p>

                  <p
                    className={`mb-6 text-sm leading-relaxed ${
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
                          className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-xs font-semibold"
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
                          <span className="text-blue-500 mt-1 flex-shrink-0">
                            ▹
                          </span>
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
