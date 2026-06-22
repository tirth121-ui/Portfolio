import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="px-6 py-8">

      <div className="bg-[#07111f] border border-slate-800 rounded-3xl p-10">

        <h1 className="text-5xl font-bold text-blue-400 mb-8">
          Contact Me
        </h1>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Info */}

          <div>

            <div className="flex items-center gap-4 mb-6">
              <FaEnvelope className="text-blue-500 text-2xl" />
              <span>tirth@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <FaPhone className="text-green-500 text-2xl" />
              <span>+91 9876543210</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-red-500 text-2xl" />
              <span>Ahmedabad, Gujarat, India</span>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">
                Let's Work Together 🚀
              </h2>

              <p className="text-gray-400">
                Feel free to contact me for freelance projects,
                internships, collaborations, or any exciting opportunities.
              </p>
            </div>

          </div>

          {/* Contact Form */}

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-900 p-4 rounded-xl outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-900 p-4 rounded-xl outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-slate-900 p-4 rounded-xl outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-slate-900 p-4 rounded-xl outline-none"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-4 rounded-xl font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}