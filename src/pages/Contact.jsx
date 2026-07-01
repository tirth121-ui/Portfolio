// import {
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// export default function Contact() {
//   return (
//     <div className="px-6 py-8">

//       <div className="bg-[#07111f] border border-slate-800 rounded-3xl p-10">

//         <h1 className="text-5xl font-bold text-blue-400 mb-8">
//           Contact Me
//         </h1>

//         <div className="grid lg:grid-cols-2 gap-10">

//           {/* Contact Info */}

//           <div>

//             <div className="flex items-center gap-4 mb-6">
//               <FaEnvelope className="text-blue-500 text-2xl" />
//               <span>tirth@gmail.com</span>
//             </div>

//             <div className="flex items-center gap-4 mb-6">
//               <FaPhone className="text-green-500 text-2xl" />
//               <span>+91 9876543210</span>
//             </div>

//             <div className="flex items-center gap-4">
//               <FaMapMarkerAlt className="text-red-500 text-2xl" />
//               <span>Ahmedabad, Gujarat, India</span>
//             </div>

//             <div className="mt-10">
//               <h2 className="text-2xl font-bold mb-4">
//                 Let's Work Together 🚀
//               </h2>

//               <p className="text-gray-400">
//                 Feel free to contact me for freelance projects,
//                 internships, collaborations, or any exciting opportunities.
//               </p>
//             </div>

//           </div>

//           {/* Contact Form */}

//           <form className="space-y-4">

//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full bg-slate-900 p-4 rounded-xl outline-none"
//             />

//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full bg-slate-900 p-4 rounded-xl outline-none"
//             />

//             <input
//               type="text"
//               placeholder="Subject"
//               className="w-full bg-slate-900 p-4 rounded-xl outline-none"
//             />

//             <textarea
//               rows="6"
//               placeholder="Your Message"
//               className="w-full bg-slate-900 p-4 rounded-xl outline-none"
//             />

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-4 rounded-xl font-semibold"
//             >
//               Send Message
//             </button>

//           </form>

//         </div>

//       </div>

//     </div>
//   );
// }

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
                internships, collaborations, or any exciting
                opportunities.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-slate-900 p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-slate-900 p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full bg-slate-900 p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
              className="w-full bg-slate-900 p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02]"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}