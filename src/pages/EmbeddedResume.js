export default function EmbeddedResume({ isDark }) {
  const pdfFile = "/utils/embedded_resume.pdf";

  return (
    <div
      className={`min-h-screen p-6 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
        Embedded Resume
      </h1>

      <embed
        src={pdfFile}
        type="application/pdf"
        className="w-full h-[85vh] border rounded-lg shadow-lg"
      />
    </div>
  );
}
