import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

export default function About() {
  return (
    <div className="px-6 py-8">

      <div className="bg-[#07111f] border border-slate-800 rounded-3xl p-10">

        <h1 className="text-5xl font-bold mb-6 text-blue-400">
          About Me
        </h1>

        <p className="text-gray-300 text-lg leading-8">
          Hello! I'm <span className="text-blue-400 font-semibold">Tirth Patel</span>,
          a passionate Full Stack Developer from Ahmedabad, India.
          I enjoy creating modern web applications with beautiful user
          interfaces and powerful backend functionality.
        </p>

        <p className="text-gray-400 mt-4 leading-8">
          My goal is to build innovative digital solutions that provide
          excellent user experiences while maintaining clean and efficient code.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-slate-900 p-6 rounded-2xl">
            <FaCode size={40} className="text-blue-500 mb-4" />
            <h2 className="text-xl font-bold mb-2">Frontend</h2>
            <p className="text-gray-400">
              React, Tailwind CSS, JavaScript, Responsive Design
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <FaLaptopCode size={40} className="text-purple-500 mb-4" />
            <h2 className="text-xl font-bold mb-2">Backend</h2>
            <p className="text-gray-400">
              Node.js, Express.js, MongoDB, REST APIs
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <FaRocket size={40} className="text-pink-500 mb-4" />
            <h2 className="text-xl font-bold mb-2">Goals</h2>
            <p className="text-gray-400">
              Building scalable and modern web applications.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}