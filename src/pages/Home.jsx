import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="px-6 py-8">

      <section className="bg-[#07111f] border border-slate-800 rounded-3xl p-10">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}

          <div className="flex flex-col lg:flex-row items-center gap-8">

            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43?w=500"
                alt="profile"
                className="w-64 h-64 rounded-full object-cover border-4 border-purple-500"
              />

              <div className="absolute bottom-2 left-10 bg-slate-900 border border-green-500 px-4 py-2 rounded-full text-green-400">
                ● Available
              </div>

            </div>

            <div>

              <h2 className="text-5xl font-bold">
                Hi, I'm
              </h2>

              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Tirth Valand
              </h1>

              <h3 className="text-2xl text-blue-400 mt-4">
                Full Stack Developer
              </h3>

              <p className="text-gray-400 mt-6 max-w-lg">
                I build modern, responsive and user-friendly web
                applications with focus on performance and great
                user experience.
              </p>

              <div className="flex gap-4 mt-6">

                <div className="bg-slate-800 p-3 rounded-full">
                  <FaGithub size={22} />
                </div>

                <div className="bg-slate-800 p-3 rounded-full">
                  <FaLinkedin size={22} />
                </div>

                <div className="bg-slate-800 p-3 rounded-full">
                  <FaTwitter size={22} />
                </div>

                <div className="bg-slate-800 p-3 rounded-full">
                  <FaInstagram size={22} />
                </div>

              </div>

              <div className="flex gap-4 mt-8">

                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                  Hire Me
                </button>

                <button className="px-8 py-4 rounded-xl border border-slate-600">
                  My Works
                </button>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div>

            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/programmer-working-on-laptop-6298274-5187863.png"
              alt="developer"
              className="w-full"
            />

            <div className="grid grid-cols-4 gap-4 bg-slate-900 border border-slate-700 rounded-2xl p-6 mt-6">

              <div className="text-center">
                <h2 className="text-3xl font-bold">50+</h2>
                <p className="text-gray-400">Projects</p>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-bold">3+</h2>
                <p className="text-gray-400">Years Exp.</p>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-bold">30+</h2>
                <p className="text-gray-400">Clients</p>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-bold">10+</h2>
                <p className="text-gray-400">Stacks</p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}