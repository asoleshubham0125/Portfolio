import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

export default function Contact({ isDark }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xldzwjkv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Something went wrong. Try again!");
      }
    } catch (error) {
      setStatus("Network error. Try again!");
    }

    setTimeout(() => setStatus(""), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "asoleshubham01@gmail.com",
      href: "mailto:asoleshubham01@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8767239628",
      href: "tel:+918767239628",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "shubham-asole",
      href: "https://www.linkedin.com/in/shubham-asole/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "asoleshubham0125",
      href: "https://github.com/asoleshubham0125",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${
        isDark ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p
            className={`text-center text-lg mb-16 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Let's discuss how I can contribute to your team
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={
                      item.label === "LinkedIn" || item.label === "GitHub"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.label === "LinkedIn" || item.label === "GitHub"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`flex items-center gap-4 p-4 rounded-xl ${
                      isDark
                        ? "bg-gray-900 hover:bg-gray-850"
                        : "bg-white hover:shadow-lg"
                    } transition-all duration-300 hover:scale-105`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        isDark ? "bg-gray-800" : "bg-blue-50"
                      }`}
                    >
                      <item.icon className="text-blue-500" size={24} />
                    </div>

                    <div>
                      <p
                        className={`text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {item.label}
                      </p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div
                className={`p-6 rounded-xl border ${
                  isDark
                    ? "bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-800/50"
                    : "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200"
                }`}
              >
                <h4 className="text-xl font-bold mb-4">Why Hire Me?</h4>

                <ul className="space-y-3">
                  {[
                    "Dual expertise in Software & Embedded Systems",
                    "Strong foundation in DSA, OOP, and System Design",
                    "Production-ready MERN stack projects",
                    "Proven leadership managing 1000+ residents",
                    "Real-world industrial internship experience",
                  ].map((point, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className={`p-8 rounded-2xl shadow-xl ${
                isDark ? "bg-gray-900" : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-semibold mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500 ${
                      isDark
                        ? "bg-gray-800 text-white border-gray-700"
                        : "bg-gray-50 text-gray-900 border-gray-300"
                    }`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-semibold mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Your Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500 ${
                      isDark
                        ? "bg-gray-800 text-white border-gray-700"
                        : "bg-gray-50 text-gray-900 border-gray-300"
                    }`}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-semibold mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500 ${
                      isDark
                        ? "bg-gray-800 text-white border-gray-700"
                        : "bg-gray-50 text-gray-900 border-gray-300"
                    }`}
                    placeholder="Job Opportunity"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-semibold mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500 resize-none ${
                      isDark
                        ? "bg-gray-800 text-white border-gray-700"
                        : "bg-gray-50 text-gray-900 border-gray-300"
                    }`}
                    placeholder="Tell me about the opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>

                {status && (
                  <p className="text-center text-sm text-blue-500 font-semibold">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
