import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-6">

      <section className="bg-[#07111f] border border-slate-800 rounded-3xl p-5 md:p-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SECTION */}

          <div className="flex flex-col lg:flex-row items-center gap-8">

            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43?w=500"
                alt="profile"
                className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover border-4 border-purple-500"
              />

              <div className="absolute bottom-0 left-4 md:left-10 bg-slate-900 border border-green-500 px-3 py-1 rounded-full text-green-400 text-xs md:text-sm">
                ● Available
              </div>

            </div>

            <div className="text-center lg:text-left">

              <h2 className="text-3xl md:text-5xl font-bold">
                Hi, I'm
              </h2>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Tirth Patel
              </h1>

              <h3 className="text-xl md:text-2xl text-blue-400 mt-4">
                Full Stack Developer
              </h3>

              <p className="text-gray-400 mt-4 leading-7 max-w-xl">
                I build modern, responsive and user-friendly web
                applications with focus on performance and
                exceptional user experience.
              </p>

              {/* Social Icons */}

              <div className="flex justify-center lg:justify-start gap-4 mt-6">

                <a href="#">
                  <div className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition">
                    <FaGithub size={20} />
                  </div>
                </a>

                <a href="#">
                  <div className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition">
                    <FaLinkedin size={20} />
                  </div>
                </a>

                <a href="#">
                  <div className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition">
                    <FaTwitter size={20} />
                  </div>
                </a>

                <a href="#">
                  <div className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition">
                    <FaInstagram size={20} />
                  </div>
                </a>

              </div>

              {/* Buttons */}

              <div className="flex flex-col sm:flex-row gap-4 mt-8">

                <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition">
                  Hire Me
                </button>

                <button className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-600 hover:bg-slate-800 transition">
                  My Works
                </button>

              </div>

            </div>

          </div>

          {/* RIGHT SECTION */}

          <div>

            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/programmer-working-on-laptop-6298274-5187863.png"
              alt="developer"
              className="w-full max-w-md mx-auto"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900 border border-slate-700 rounded-2xl p-6 mt-6">

              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold">50+</h2>
                <p className="text-gray-400 text-sm">Projects</p>
              </div>

              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold">3+</h2>
                <p className="text-gray-400 text-sm">Years Exp.</p>
              </div>

              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold">30+</h2>
                <p className="text-gray-400 text-sm">Clients</p>
              </div>

              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold">10+</h2>
                <p className="text-gray-400 text-sm">Stacks</p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}