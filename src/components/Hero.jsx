import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="mt-6 bg-[#07111f] border border-slate-700 rounded-3xl p-10">

      <div className="grid lg:grid-cols-2 gap-10 items-center">

        <div>
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43?w=600"
                alt=""
                className="w-64 h-64 object-cover rounded-full border-4 border-purple-500"
              />

              <div className="absolute bottom-2 left-12 bg-slate-900 border border-green-500 text-green-400 px-4 py-2 rounded-full">
                ● Available
              </div>
            </div>

            <div>

              <h2 className="text-5xl font-bold">
                Hi, I'm
              </h2>

              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                Tirth Patel
              </h1>

              <h3 className="text-2xl text-blue-400 mt-4">
                Full Stack Developer
              </h3>

              <p className="text-gray-400 mt-5 max-w-xl">
                I build modern responsive web applications
                with focus on performance and great user experience.
              </p>

              <div className="flex gap-4 mt-6 text-2xl">
                <FaGithub />
                <FaLinkedin />
                <FaTwitter />
                <FaInstagram />
              </div>

              <div className="flex gap-4 mt-8">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-xl">
                  Hire Me
                </button>

                <button className="border border-slate-600 px-8 py-4 rounded-xl">
                  My Works
                </button>
              </div>
            </div>

          </div>
        </div>

        <div>
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/programmer-working-on-laptop-6298274-5187863.png"
            alt=""
            className="w-full"
          />

          <div className="grid grid-cols-4 gap-4 mt-6 bg-slate-900 p-6 rounded-2xl">

            <div className="text-center">
              <h2 className="text-3xl font-bold">50+</h2>
              <p className="text-gray-400">Projects</p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold">3+</h2>
              <p className="text-gray-400">Years</p>
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
  );
}

export default Hero;