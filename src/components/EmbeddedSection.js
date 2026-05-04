import { Cpu } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function EmbeddedSection({ isDark }) {
  const sectionRef = useScrollReveal();

  const skills = {
    languages: ["Embedded C", "Python", "ARM Assembly", "Java"],
    hardware: ["ESP32", "ARM MCUs", "UART", "I2C", "SPI"],
    software: ["MATLAB/Simulink", "LTSpice", "LabVIEW", "Vivado", "Linux"],
    domains: ["IoT", "Robotics", "Biomedical", "Control Systems"],
  };

  const projects = [
    {
      title: "Optical Wearable Probe",
      subtitle: "Neonatal Jaundice Monitor",
      description:
        "Advanced wearable biomedical device for non-invasive jaundice detection in newborns using optical sensing technology.",
      tech: [
        "LEDs",
        "Photodiodes",
        "Signal Processing",
        "Embedded C",
        "Biomedical",
      ],
      highlights: [
        "High-accuracy optical sensing system",
        "Real-time signal processing algorithms",
        "Non-invasive wearable form factor",
        "Clinical-grade measurement precision",
      ],
    },
    {
      title: "Railway Sleeper Validation",
      subtitle: "Industrial Inspection System",
      description:
        "Automated quality control system for railway infrastructure using ESP32 and computer vision.",
      tech: ["ESP32", "IR Sensors", "Camera Module", "Computer Vision", "IoT"],
      highlights: [
        "Built an automated inspection system using ESP32, IR sensors, and camera modules to validate railway sleeper block dimensions",
        "Implemented image capture from top and side views with dimensional tolerance within ±10 mm",
        "Improved inspection efficiency by automating the validation workflow, reducing manual labor",
      ],
    },
    {
      title: "Smart LPG Monitoring",
      subtitle: "IoT Safety System",
      description:
        "Intelligent gas leak detection and alert system with automated SMS notifications for enhanced safety.",
      tech: [
        "IoT",
        "Gas Sensors",
        "SMS Gateway",
        "ESP32",
        "Real-time Monitoring",
      ],
      highlights: [
        "Real-time gas leak detection",
        "Automated SMS alert system",
        "Cloud-based monitoring dashboard",
        "Multi-sensor fusion for accuracy",
      ],
    },
    {
      title: "Satellite Data Prediction",
      subtitle: "ML-based Trajectory Analysis",
      description:
        "Machine learning models for satellite position and velocity trend prediction from time-series tracking data.",
      tech: [
        "Python",
        "Pandas",
        "Seaborn",
        "Matplotlib",
        "Machine Learning",
      ],
      highlights: [
        "Built ML-based models using Python and statistical techniques to predict satellite position and velocity trends",
        "Developed interactive visual dashboards using heatmaps, 3D trajectory plots, and time-series graphs",
        "Optimized data preprocessing and feature handling for scalable processing of large datasets",
      ],
    },
  ];

  const internship = {
    title: "Embedded Systems Intern",
    company: "Startrit Infratech Pvt Ltd",
    period: "May 2025 – July 2025",
    responsibilities: [
      "Improved automation system reliability by developing and integrating sensor-based control modules using Embedded C and Python to support stable real-time operations.",
      "Validated hardware–software communication by building and testing a Raspberry Pi robotic prototype using UART to ensure accurate data transmission and device control.",
      "Supported faster inspection and analysis workflows by running MATLAB-based simulations and performing structured data analysis to assist engineering decisions.",
    ],
  };

  return (
    <section
      id="embedded"
      ref={sectionRef}
      className={`py-20 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fade-in-up">
            Embedded{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Systems
            </span>
          </h2>

          <div className="section-divider mb-4 fade-in-up"></div>

          <p
            className={`text-center text-lg mb-16 fade-in-up ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Hardware-software integration and real-time control systems
          </p>

          {/* SKILLS SECTION */}
          <div className="mb-16 fade-in-up">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Technical Expertise
            </h3>

            <div className="grid md:grid-cols-4 gap-6 stagger-children">
              {/* Languages */}
              <div
                className={`fade-in-up p-6 rounded-xl shadow-lg card-shine ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <h4 className="font-bold mb-4 text-cyan-500">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, i) => (
                    <span
                      key={i}
                      className={`skill-tag px-3 py-1 rounded-full text-sm ${
                        isDark
                          ? "bg-gray-900 text-gray-300"
                          : "bg-white text-gray-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hardware */}
              <div
                className={`fade-in-up p-6 rounded-xl shadow-lg card-shine ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <h4 className="font-bold mb-4 text-teal-500">Hardware</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.hardware.map((skill, i) => (
                    <span
                      key={i}
                      className={`skill-tag px-3 py-1 rounded-full text-sm ${
                        isDark
                          ? "bg-gray-900 text-gray-300"
                          : "bg-white text-gray-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Software */}
              <div
                className={`fade-in-up p-6 rounded-xl shadow-lg card-shine ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <h4 className="font-bold mb-4 text-green-500">Software</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.software.map((skill, i) => (
                    <span
                      key={i}
                      className={`skill-tag px-3 py-1 rounded-full text-sm ${
                        isDark
                          ? "bg-gray-900 text-gray-300"
                          : "bg-white text-gray-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Domains */}
              <div
                className={`fade-in-up p-6 rounded-xl shadow-lg card-shine ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <h4 className="font-bold mb-4 text-blue-500">Domains</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.domains.map((skill, i) => (
                    <span
                      key={i}
                      className={`skill-tag px-3 py-1 rounded-full text-sm ${
                        isDark
                          ? "bg-gray-900 text-gray-300"
                          : "bg-white text-gray-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="mb-16 fade-in-up">
            <h3 className="text-2xl font-bold mb-8 text-center">Experience</h3>

            <div
              className={`p-8 rounded-2xl border gradient-border card-shine ${
                isDark
                  ? "bg-gradient-to-br from-cyan-900/30 to-teal-900/30 border-cyan-800/50"
                  : "bg-gradient-to-br from-cyan-50 to-teal-50 border-cyan-200"
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`p-3 rounded-lg ${
                    isDark ? "bg-cyan-900/50" : "bg-cyan-100"
                  }`}
                >
                  <Cpu className="text-cyan-500" size={24} />
                </div>

                <div>
                  <h4 className="text-xl font-bold">{internship.title}</h4>
                  <p className="text-cyan-500 font-semibold">
                    {internship.company}
                  </p>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {internship.period}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {internship.responsibilities.map((resp, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <span className="text-cyan-500 mt-1 flex-shrink-0">▹</span>
                    <span className="text-sm leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* PROJECTS */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center fade-in-up">
              Featured Projects
            </h3>

            <div className="grid md:grid-cols-2 gap-8 stagger-children">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`fade-in-up p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] border card-shine gradient-border ${
                    isDark
                      ? "bg-gray-800 border-gray-700 hover:bg-gray-750"
                      : "bg-gray-50 border-gray-200 hover:shadow-2xl"
                  }`}
                >
                  <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                  <p className="text-cyan-500 font-semibold mb-4">
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
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full text-xs font-semibold"
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
                          <span className="text-cyan-500 mt-1 flex-shrink-0">
                            ▹
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
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
