import { Code2, Cpu, Trophy, Users } from "lucide-react";

export default function About({ isDark }) {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "MERN stack expertise with scalable architectures",
    },
    {
      icon: Cpu,
      title: "Embedded Systems",
      description: "ESP32, ARM MCUs, Real-time control systems",
    },
    {
      icon: Trophy,
      title: "Production Ready",
      description: "Building solutions that matter in the real world",
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Hostel Coordinator managing 1000+ residents",
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p
            className={`text-center text-lg mb-16 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Versatile engineer bridging software and hardware
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div
              className={`p-8 rounded-2xl ${
                isDark
                  ? "bg-gradient-to-br from-blue-900/30 to-cyan-900/30"
                  : "bg-gradient-to-br from-blue-50 to-cyan-50"
              } border ${isDark ? "border-blue-800/50" : "border-blue-200"}`}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Code2 className="text-blue-500" />
                Software Engineer
              </h3>

              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                Aspiring Software Engineer with strong Java/JavaScript skills,
                focused on building scalable backend systems and clean,
                efficient web applications. Experienced in MERN stack, RESTful
                APIs, and modern frontend frameworks.
              </p>
            </div>

            <div
              className={`p-8 rounded-2xl ${
                isDark
                  ? "bg-gradient-to-br from-cyan-900/30 to-teal-900/30"
                  : "bg-gradient-to-br from-cyan-50 to-teal-50"
              } border ${isDark ? "border-cyan-800/50" : "border-cyan-200"}`}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Cpu className="text-cyan-500" />
                Embedded Engineer
              </h3>

              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                Aspiring Embedded Systems & Robotics Engineer with experience in
                microcontrollers, real-time control systems, and
                hardware-software integration. Specialized in IoT automation,
                biomedical sensors, and industrial applications.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  isDark
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-50 hover:bg-gray-100"
                } transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <item.icon className="text-blue-500 mb-4" size={32} />
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
