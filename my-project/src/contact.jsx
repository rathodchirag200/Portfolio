import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = ({ theme }) => {
  const isDark = theme === "dark";

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

    const API_URL = import.meta.env.VITE_API_URL;

  const inputClass = `w-full p-4 rounded-md transition outline-none
    ${isDark 
      ? 'bg-[#0B0C10] text-white placeholder-gray-400 border border-gray-700 focus:border-blue-500' 
      : 'bg-gray-100 text-black placeholder-gray-500 border border-gray-300 focus:border-blue-500'
    }`;

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/contact`, {
        name,
        email,
        message,
      });

      setSuccess(res.data.message || "Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("❌ Submit error:", err);
      setError(err.response?.data?.error || "Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={`py-20 px-8 transition-colors duration-500 ${isDark ? 'bg-[#0B0C10] text-white' : 'bg-white text-black'}`}>
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className={`text-5xl md:text-6xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
          Contact <span className="text-blue-500">Me</span>
        </h1>
        <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mt-4 text-lg md:text-xl`}>
          Let's get in touch! I would love to hear from you.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Contact Info */}
        <div className={`${isDark ? 'text-white' : 'text-black'}`}>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
            Feel free to contact me to know more about me. You can call me or send an email; I will surely reach out to you in the nearest time.
          </p>

          <div className={`flex flex-col gap-4 ${isDark ? 'text-gray-300' : 'text-gray-700'} text-lg`}>
            <p><span className="font-semibold">Location:</span> Surat, GJ (India)</p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" /> cjrathod12345@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-blue-500" /> +91 9725391505
            </p>
          </div>

          <h3 className={`text-xl font-bold mt-6 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Connect with Me :</h3>
          <div className="flex gap-6 text-2xl">
            <a href="https://www.linkedin.com/in/chirag-rathod-2a6475288/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:scale-110 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/rathodchirag200" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:scale-110 transition">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className={`p-8 rounded-xl shadow-lg transition-colors duration-500 ${isDark ? 'bg-[#1A1A1D]' : 'bg-gray-100'}`}>
          <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>Send a Message</h2>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" className={inputClass} value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Your Email" className={inputClass} value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea rows="6" placeholder="Your Message" className={inputClass} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            
            {error && <p className="text-red-500 font-semibold">{error}</p>}
            {success && <p className="text-green-500 font-semibold">{success}</p>}

            <button
              type="submit"
              disabled={loading}
              className={`font-semibold py-3 px-6 rounded-md transition ${
                isDark ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
