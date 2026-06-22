export default function Education() {
  return (
    <div className="px-6 py-8">

      <div className="bg-[#07111f] border border-slate-800 rounded-3xl p-10">

        <h1 className="text-5xl font-bold text-blue-400 mb-10">
          Education
        </h1>

        <div className="space-y-8">

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold">
              Bachelor of Computer Applications (BCA)
            </h2>

            <p className="text-blue-400 mt-2">
              2023 - Present
            </p>

            <p className="text-gray-400 mt-3">
              Studying computer programming, software development,
              database management, networking and web technologies.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold">
              Higher Secondary Education
            </h2>

            <p className="text-blue-400 mt-2">
              Completed
            </p>

            <p className="text-gray-400 mt-3">
              Focused on mathematics, computer science and logical thinking.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold">
              Certifications
            </h2>

            <ul className="list-disc ml-5 mt-3 text-gray-400">
              <li>React JS Development</li>
              <li>JavaScript Programming</li>
              <li>Web Design & Tailwind CSS</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}