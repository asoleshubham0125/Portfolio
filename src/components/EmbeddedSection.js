import { Cpu } from "lucide-react";

export default function EmbeddedSection({ isDark }) {
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
        "Dimensional validation within ±10mm tolerance",
        "Real-time defect detection",
        "Automated inspection workflow",
        "Industrial automation integration",
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
        "Advanced machine learning system for satellite trajectory prediction with comprehensive data visualization.",
      tech: [
        "Python",
        "Machine Learning",
        "Time-series",
        "3D Visualization",
        "Data Science",
      ],
      highlights: [
        "3D trajectory plotting and analysis",
        "Time-series forecasting models",
        "Predictive analytics dashboard",
        "Real-time data processing",
      ],
    },
  ];

  const internship = {
    title: "Embedded Systems Intern",
    company: "Startrit Infratech Pvt Ltd",
    period: "May 2025 – Aug 2025",
    responsibilities: [
      "Developed robotics and automation modules using Raspberry Pi",
      "Implemented UART-based communication protocols",
      "Built sensor-based inspection systems for industrial applications",
      "Real-time control system development and MATLAB analysis",
    ],
  };

  return (
    <section
      id="embedded"
      className={`py-20 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Embedded{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Systems
            </span>
          </h2>

          <p
            className={`text-center text-lg mb-16 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Hardware-software integration and real-time control systems
          </p>

          {/* SKILLS SECTION */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Technical Expertise
            </h3>

            <div className="grid md:grid-cols-4 gap-6">
              {/* Languages */}
              <div
                className={`p-6 rounded-xl shadow-lg ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <h4 className="font-bold mb-4 text-cyan-500">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${
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
                className={`p-6 rounded-xl shadow-lg ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <h4 className="font-bold mb-4 text-teal-500">Hardware</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.hardware.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${
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
                className={`p-6 rounded-xl shadow-lg ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <h4 className="font-bold mb-4 text-green-500">Software</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.software.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${
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
                className={`p-6 rounded-xl shadow-lg ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <h4 className="font-bold mb-4 text-blue-500">Domains</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.domains.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${
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
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Experience</h3>

            <div
              className={`p-8 rounded-2xl border ${
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
                    <span className="text-cyan-500 mt-1">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* PROJECTS */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Featured Projects
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 border ${
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
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full text-sm font-semibold"
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
                          <span className="text-cyan-500 mt-1">▹</span>
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
