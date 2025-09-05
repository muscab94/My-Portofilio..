
import axios from "axios";
import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaCheck } from "react-icons/fa";
import Swal from "sweetalert2";

function Contact() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlePost = (e) => {
    e.preventDefault(); // prevent refresh
    axios
      .post("http://localhost:9000/create/contact", {
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        Swal.fire({
          title: "✅ Success!",
          text: "Your message has been sent successfully.",
          icon: "success",
          confirmButtonColor: "#4F46E5", // Indigo button
        });

        // Reset form
        setname("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        Swal.fire({
          title: "❌ Error!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonColor: "#EF4444", // Red button
        });
      });
  };

  return (
    <div className="p-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-indigo-600">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Get in Touch
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            I’d love to hear from you! Whether you have a question, want to
            collaborate, or just say hello, feel free to drop me a message.
            I usually reply within 24 hours. 🚀
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-indigo-600" /> Muqdisho, Somalia
            </p>
            <p className="flex items-center gap-3">
              <a
                href="mailto:muscabhasan10@gmail.com"
                className="flex items-center gap-2 text-indigo-600 hover:underline"
              >
                <FaEnvelope /> muscabhasan10@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <a
                href="tel:+252619150294"
                className="flex items-center gap-2 text-indigo-600 hover:underline"
              >
                <FaPhone /> +252 619150294
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaCheck className="text-indigo-600" /> Freelance available
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <form onSubmit={handlePost} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setname(e.target.value)}
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
