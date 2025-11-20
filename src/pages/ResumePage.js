import { Link } from "react-router-dom";

export default function ResumePage({ isDark }) {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
        Select Resume
      </h1>

      <div className="flex gap-6 justify-center">
        <Link
          to="/resume/embedded"
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-center"
        >
          Embedded Resume
        </Link>

        <Link
          to="/resume/software"
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-center"
        >
          Software Resume
        </Link>
      </div>
    </div>
  );
}
