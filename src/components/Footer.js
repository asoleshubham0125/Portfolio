import { Heart } from "lucide-react";

export default function Footer({ isDark }) {
  return (
    <footer
      className={`py-8 border-t ${
        isDark
          ? "bg-gray-900 text-gray-400 border-gray-800"
          : "bg-white text-gray-600 border-gray-200"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>by Shubham Asole</span>
          </div>

          <div className="text-sm text-center md:text-left">
            <span>IIITDM Kancheepuram</span>
            <span className="mx-2">•</span>
            <span>Aspiring SDE & Embedded Engineer</span>
          </div>

          <div className="text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
